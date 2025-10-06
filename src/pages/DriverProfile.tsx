import { useParams, Link } from "react-router-dom";
import { Trophy, Award, Target, TrendingUp, Flag, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDriverById, getTeamById } from "@/data/f1Data";

const DriverProfile = () => {
  const { id } = useParams<{ id: string }>();
  const driver = id ? getDriverById(id) : undefined;
  const team = driver ? getTeamById(driver.teamId) : undefined;

  if (!driver) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Driver Not Found</h1>
          <Link to="/drivers">
            <Button>Back to Drivers</Button>
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
        <Link to="/drivers" className="inline-block mb-6">
          <Button variant="outline" className="hover:bg-secondary/50">
            ← Back to Drivers
          </Button>
        </Link>

        {/* Driver Header */}
        <div className="racing-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                  {driver.number}
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gradient mb-2">{driver.name}</h1>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                <div className="flex items-center space-x-2">
                  <Flag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{driver.nationality}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{driver.age} years old</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <Link to={`/team/${driver.teamId}`}>
                    <Badge variant="secondary" className="team-badge cursor-pointer hover:bg-secondary/40">
                      {driver.team}
                    </Badge>
                  </Link>
                </div>
              </div>

              {driver.championships > 0 && (
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <Trophy className="h-6 w-6 text-accent" />
                  <span className="victory-badge text-base">
                    {driver.championships}x World Champion
                  </span>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="stat-card">
                  <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-2xl font-bold">{driver.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
                <div className="stat-card">
                  <Target className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-2xl font-bold">{driver.podiums}</div>
                  <div className="text-xs text-muted-foreground">Podiums</div>
                </div>
                <div className="stat-card">
                  <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{driver.poles}</div>
                  <div className="text-xs text-muted-foreground">Poles</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl font-bold">{driver.points}</div>
                  <div className="text-xs text-muted-foreground">Points</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="biography" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50">
            <TabsTrigger value="biography">Biography</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="cars">Cars</TabsTrigger>
          </TabsList>

          <TabsContent value="biography">
            <Card className="racing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Biography</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{driver.biography}</p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Career Highlights</h3>
                  <ul className="space-y-2">
                    {driver.careerHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Trophy className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="racing-card">
                <CardHeader>
                  <CardTitle>Race Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Championships</span>
                      <span className="font-bold text-lg">{driver.championships}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Race Wins</span>
                      <span className="font-bold text-lg">{driver.wins}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Podiums</span>
                      <span className="font-bold text-lg">{driver.podiums}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Pole Positions</span>
                      <span className="font-bold text-lg">{driver.poles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Career Points</span>
                      <span className="font-bold text-lg">{driver.points}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="racing-card">
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Win Rate</span>
                        <span className="text-sm font-medium">
                          {driver.wins > 0 ? ((driver.wins / (driver.wins + driver.podiums)) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                      <div className="speed-bar">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${driver.wins > 0 ? (driver.wins / (driver.wins + driver.podiums)) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Podium Rate</span>
                        <span className="text-sm font-medium">
                          {((driver.podiums / 100) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="speed-bar">
                        <div 
                          className="h-full bg-accent rounded-full transition-all duration-500"
                          style={{ width: `${(driver.podiums / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cars">
            <Card className="racing-card">
              <CardHeader>
                <CardTitle>Current Team & Cars</CardTitle>
              </CardHeader>
              <CardContent>
                {team && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="text-xl font-semibold">{team.fullName}</h3>
                        <p className="text-muted-foreground">{team.base}</p>
                        <Badge variant="secondary" className="team-badge mt-2">
                          {team.chassis} - {team.powerUnit}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {team.cars.map((car) => (
                        <div key={car.year} className="racing-card p-4">
                          <h4 className="font-semibold">{car.model}</h4>
                          <p className="text-sm text-muted-foreground">{car.year} Season</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DriverProfile;