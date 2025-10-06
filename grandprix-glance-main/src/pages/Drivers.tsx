import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Award, Target, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { drivers } from "@/data/f1Data";

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            F1 Drivers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the world's best Formula 1 drivers competing at the highest level of motorsport
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search drivers by name, nationality, or team..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card/50 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrivers.map((driver) => (
            <Link key={driver.id} to={`/driver/${driver.id}`}>
              <Card className="racing-card group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {driver.number}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {driver.name}
                  </h3>
                  <p className="text-muted-foreground">{driver.nationality}</p>
                  
                  <Badge variant="secondary" className="team-badge mx-auto">
                    {driver.team}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Championships */}
                  {driver.championships > 0 && (
                    <div className="flex items-center justify-center space-x-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      <span className="victory-badge">
                        {driver.championships}x Champion
                      </span>
                    </div>
                  )}

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="stat-card">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="h-4 w-4 text-primary mr-1" />
                        <span className="text-xs text-muted-foreground">WINS</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{driver.wins}</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="flex items-center justify-center mb-2">
                        <Target className="h-4 w-4 text-accent mr-1" />
                        <span className="text-xs text-muted-foreground">PODIUMS</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{driver.podiums}</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-xs text-muted-foreground">POLES</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{driver.poles}</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-xs text-muted-foreground">POINTS</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{driver.points}</div>
                    </div>
                  </div>

                  {/* Career Highlights Preview */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {driver.careerHighlights[0]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredDrivers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No drivers found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drivers;