import { useState } from "react";
import { Calendar, MapPin, Trophy, Clock, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { races, Race } from "@/data/f1Data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Races = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>("2024");
  
  const seasons = [...new Set(races.map(race => race.season.toString()))].sort((a, b) => parseInt(b) - parseInt(a));
  const filteredRaces = races.filter(race => race.season.toString() === selectedSeason);

  // Chart data for fastest lap speeds
  const chartData = filteredRaces
    .filter(race => race.fastestLap)
    .map(race => ({
      name: race.name.replace(' Grand Prix', ''),
      speed: race.fastestLap?.speed || 0,
      time: race.fastestLap?.time || '',
      driver: race.fastestLap?.driver || ''
    }));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1: return 'text-accent';
      case 2: return 'text-muted-foreground';
      case 3: return 'text-orange-500';
      default: return 'text-foreground';
    }
  };

  const getPositionBadge = (position: number) => {
    switch (position) {
      case 1: return 'victory-badge';
      case 2: return 'bg-muted text-muted-foreground';
      case 3: return 'bg-orange-500/20 text-orange-500';
      default: return 'bg-secondary/20 text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            F1 Races & Seasons
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore race results, lap times, and championship standings across F1 seasons
          </p>
        </div>

        {/* Season Filter */}
        <div className="flex justify-center mb-8">
          <Select value={selectedSeason} onValueChange={setSelectedSeason}>
            <SelectTrigger className="w-48 bg-card/50 border-border/50">
              <SelectValue placeholder="Select Season" />
            </SelectTrigger>
            <SelectContent>
              {seasons.map((season) => (
                <SelectItem key={season} value={season}>
                  {season} Season
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Speed Chart */}
        {chartData.length > 0 && (
          <Card className="racing-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Fastest Lap Speeds - {selectedSeason} Season</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: any, name: any, props: any) => [
                        `${value} km/h`,
                        `Speed (${props.payload.driver})`
                      ]}
                    />
                    <Bar 
                      dataKey="speed" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Races Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRaces.map((race) => (
            <Card key={race.id} className="racing-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{race.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{race.circuit}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{formatDate(race.date)}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="team-badge">
                    Round {race.round}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Race Results */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Race Results
                  </h4>
                  <div className="space-y-2">
                    {race.results.slice(0, 3).map((result) => (
                      <div key={result.position} className="flex items-center justify-between bg-secondary/10 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={getPositionBadge(result.position)}>
                            P{result.position}
                          </Badge>
                          <div>
                            <div className="font-medium">{result.driver}</div>
                            <div className="text-sm text-muted-foreground">{result.team}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{result.time}</div>
                          <div className="text-sm text-muted-foreground">{result.points} pts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fastest Lap */}
                {race.fastestLap && (
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Fastest Lap
                    </h4>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{race.fastestLap.driver}</div>
                          <div className="text-sm text-muted-foreground">Fastest Lap</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{race.fastestLap.time}</div>
                          <div className="text-sm text-muted-foreground">{race.fastestLap.speed} km/h</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredRaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No races found for the {selectedSeason} season.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Races;