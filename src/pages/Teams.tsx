import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Users, Flag, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { teams, getDriversByTeam } from "@/data/f1Data";

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.base.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            F1 Teams
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the constructors and teams that build the fastest cars in Formula 1
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search teams by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card/50 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTeams.map((team) => {
            const teamDrivers = getDriversByTeam(team.id);
            
            return (
              <Link key={team.id} to={`/team/${team.id}`}>
                <Card className="racing-card group cursor-pointer h-full">
                  <CardHeader className="text-center pb-4">
                    
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {team.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{team.fullName}</p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{team.base}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Championships */}
                    {team.worldChampionships > 0 && (
                      <div className="flex items-center justify-center space-x-2">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="victory-badge">
                          {team.worldChampionships}x Champions
                        </span>
                      </div>
                    )}

                    {/* Team Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="stat-card">
                        <div className="flex items-center justify-center mb-2">
                          <Trophy className="h-4 w-4 text-primary mr-1" />
                          <span className="text-xs text-muted-foreground">POLES</span>
                        </div>
                        <div className="text-lg font-bold text-foreground">{team.polePositions}</div>
                      </div>
                      
                      <div className="stat-card">
                        <div className="flex items-center justify-center mb-2">
                          <Flag className="h-4 w-4 text-accent mr-1" />
                          <span className="text-xs text-muted-foreground">FASTEST</span>
                        </div>
                        <div className="text-lg font-bold text-foreground">{team.fastestLaps}</div>
                      </div>
                    </div>

                    {/* Current Drivers */}
                    <div>
                      <div className="flex items-center justify-center mb-3">
                        <Users className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground font-medium">Current Drivers</span>
                      </div>
                      <div className="space-y-2">
                        {teamDrivers.map((driver) => (
                          <div key={driver.id} className="flex items-center justify-between bg-secondary/10 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <div>
                                <div className="font-medium text-sm">{driver.name}</div>
                                <div className="text-xs text-muted-foreground">#{driver.number}</div>
                              </div>
                            </div>
                            {driver.championships > 0 && (
                              <Badge variant="secondary" className="victory-badge text-xs">
                                {driver.championships}x
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Info */}
                    <div className="border-t border-border/50 pt-4">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Chassis:</span>
                          <div className="font-medium">{team.chassis}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engine:</span>
                          <div className="font-medium">{team.powerUnit}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Founded:</span>
                          <div className="font-medium">{team.firstTeamEntry}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Principal:</span>
                          <div className="font-medium text-xs">{team.teamChief}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No teams found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;