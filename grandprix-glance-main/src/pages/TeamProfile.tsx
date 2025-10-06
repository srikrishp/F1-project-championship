import { useParams, Link } from "react-router-dom";
import { Trophy, Users, Flag, MapPin, Calendar, Car } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTeamById, getDriversByTeam } from "@/data/f1Data";

const TeamProfile = () => {
  const { id } = useParams<{ id: string }>();
  const team = id ? getTeamById(id) : undefined;
  const teamDrivers = team ? getDriversByTeam(team.id) : [];

  if (!team) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Team Not Found</h1>
          <Link to="/teams">
            <Button>Back to Teams</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/teams" className="inline-block mb-6">
          <Button variant="outline" className="hover:bg-secondary/50">
            ← Back to Teams
          </Button>
        </Link>

        {/* Team Header */}
        <div className="racing-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gradient mb-2">{team.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{team.fullName}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{team.base}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Founded {team.firstTeamEntry}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="secondary" className="team-badge">
                    {team.chassis} - {team.powerUnit}
                  </Badge>
                </div>
              </div>

              {team.worldChampionships > 0 && (
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <Trophy className="h-6 w-6 text-accent" />
                  <span className="victory-badge text-base">
                    {team.worldChampionships}x Constructors' Champions
                  </span>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="stat-card">
                  <Trophy className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-2xl font-bold">{team.worldChampionships}</div>
                  <div className="text-xs text-muted-foreground">Championships</div>
                </div>
                <div className="stat-card">
                  <Flag className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-2xl font-bold">{team.polePositions}</div>
                  <div className="text-xs text-muted-foreground">Pole Positions</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl font-bold">{team.fastestLaps}</div>
                  <div className="text-xs text-muted-foreground">Fastest Laps</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl font-bold">{team.highestRaceFinish.position}</div>
                  <div className="text-xs text-muted-foreground">Best Finish</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="cars">Cars</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="racing-card">
                <CardHeader>
                  <CardTitle>Team Leadership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team Principal</span>
                    <span className="font-semibold">{team.teamChief}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Technical Director</span>
                    <span className="font-semibold">{team.technicalChief}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Location</span>
                    <span className="font-semibold">{team.base}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">First Entry</span>
                    <span className="font-semibold">{team.firstTeamEntry}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="racing-card">
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Chassis</span>
                    <span className="font-semibold">{team.chassis}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Power Unit</span>
                    <span className="font-semibold">{team.powerUnit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">World Championships</span>
                    <span className="font-semibold">{team.worldChampionships}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Best Finish</span>
                    <span className="font-semibold">
                      P{team.highestRaceFinish.position} ({team.highestRaceFinish.year})
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="drivers">
            <Card className="racing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Current Drivers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamDrivers.map((driver) => (
                    <Link key={driver.id} to={`/driver/${driver.id}`}>
                      <div className="racing-card p-6 cursor-pointer group hover:scale-105 transition-all">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
                                {driver.number}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {driver.name}
                            </h3>
                            <p className="text-muted-foreground">{driver.nationality}</p>
                            {driver.championships > 0 && (
                              <Badge variant="secondary" className="victory-badge mt-1">
                                {driver.championships}x Champion
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{driver.wins}</div>
                            <div className="text-xs text-muted-foreground">Wins</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-accent">{driver.podiums}</div>
                            <div className="text-xs text-muted-foreground">Podiums</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cars">
            <Card className="racing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Car className="h-5 w-5" />
                  <span>Team Cars</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {team.cars.map((car) => (
                    <div key={`${car.year}-${car.model}`} className="racing-card p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">{car.model}</h3>
                        <Badge variant="secondary" className="team-badge">
                          {car.year} Season
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          {team.powerUnit} Power Unit
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamProfile;