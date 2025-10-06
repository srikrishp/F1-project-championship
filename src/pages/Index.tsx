import { Link } from "react-router-dom";
import { Trophy, Users, Car, Flag, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { drivers, teams, races } from "@/data/f1Data";
import heroImage from "@/assets/f1-hero.jpg";

const Index = () => {
  const featuredDrivers = drivers.slice(0, 3);
  const featuredTeams = teams.slice(0, 3);
  const recentRaces = races.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in-up">
            F1 Performance Portal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Your ultimate hub for Formula 1 drivers, teams, races, and championship data
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
            <Link to="/drivers">
              <Button className="racing-button">
                <Users className="h-5 w-5 mr-2" />
                Explore Drivers
              </Button>
            </Link>
            <Link to="/teams">
              <Button variant="outline" className="hover:bg-secondary/50">
                <Car className="h-5 w-5 mr-2" />
                View Teams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Featured Drivers */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Featured Drivers</h2>
            <p className="text-xl text-muted-foreground">Meet the champions of Formula 1</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDrivers.map((driver) => (
              <Link key={driver.id} to={`/driver/${driver.id}`}>
                <Card className="racing-card group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                          {driver.number}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {driver.name}
                    </h3>
                    <Badge variant="secondary" className="team-badge">
                      {driver.team}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    {driver.championships > 0 && (
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="victory-badge">
                          {driver.championships}x Champion
                        </span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="stat-card">
                        <div className="text-lg font-bold">{driver.wins}</div>
                        <div className="text-xs text-muted-foreground">Wins</div>
                      </div>
                      <div className="stat-card">
                        <div className="text-lg font-bold">{driver.podiums}</div>
                        <div className="text-xs text-muted-foreground">Podiums</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Teams */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Championship Teams</h2>
            <p className="text-xl text-muted-foreground">The constructors shaping F1 history</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTeams.map((team) => (
              <Link key={team.id} to={`/team/${team.id}`}>
                <Card className="racing-card group cursor-pointer">
                  <CardHeader className="text-center">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {team.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{team.base}</p>
                  </CardHeader>
                  
                  <CardContent>
                    {team.worldChampionships > 0 && (
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="victory-badge">
                          {team.worldChampionships}x Champions
                        </span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="stat-card">
                        <div className="text-lg font-bold">{team.polePositions}</div>
                        <div className="text-xs text-muted-foreground">Poles</div>
                      </div>
                      <div className="stat-card">
                        <div className="text-lg font-bold">{team.fastestLaps}</div>
                        <div className="text-xs text-muted-foreground">Fastest</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Races */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Recent Races</h2>
            <p className="text-xl text-muted-foreground">Latest Formula 1 race results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentRaces.map((race) => (
              <Card key={race.id} className="racing-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{race.name}</span>
                    <Badge variant="secondary" className="team-badge">
                      Round {race.round}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{race.circuit}, {race.country}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {race.results.slice(0, 3).map((result) => (
                      <div key={result.position} className="flex items-center justify-between bg-secondary/10 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={result.position === 1 ? 'victory-badge' : 'bg-secondary/20 text-secondary-foreground'}>
                            P{result.position}
                          </Badge>
                          <span className="font-medium">{result.driver}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{result.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/races">
              <Button variant="outline" className="hover:bg-secondary/50">
                <Flag className="h-5 w-5 mr-2" />
                View All Races
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
