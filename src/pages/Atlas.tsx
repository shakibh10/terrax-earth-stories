import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplets, Wind, TrendingUp } from "lucide-react";

const Atlas = () => {
  const [selectedYear, setSelectedYear] = useState([2025]);
  const [selectedLayer, setSelectedLayer] = useState("fires");

  // Sample data for the time slider
  const atlasData = {
    2000: { fires: 1200, pollutionIndex: 40, floodEvents: 3 },
    2005: { fires: 1600, pollutionIndex: 48, floodEvents: 4 },
    2010: { fires: 2400, pollutionIndex: 65, floodEvents: 7 },
    2015: { fires: 3200, pollutionIndex: 72, floodEvents: 9 },
    2020: { fires: 4100, pollutionIndex: 80, floodEvents: 12 },
    2025: { fires: 5000, pollutionIndex: 95, floodEvents: 15 }
  };

  const currentData = atlasData[selectedYear[0] as keyof typeof atlasData];

  const layers = [
    { id: "fires", label: "Fire Hotspots", icon: Flame, color: "text-red-400" },
    { id: "pollution", label: "Air Quality", icon: Wind, color: "text-yellow-400" },
    { id: "floods", label: "Flood Events", icon: Droplets, color: "text-blue-400" },
    { id: "trends", label: "Climate Trends", icon: TrendingUp, color: "text-green-400" },
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Interactive Climate Justice Atlas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore 25 years of Terra satellite data with time-based visualization and human impact stories
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Controls Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Time Slider */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Time Period</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{selectedYear[0]}</div>
                  <div className="text-sm text-muted-foreground">Year</div>
                </div>
                
                <Slider
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                  min={2000}
                  max={2025}
                  step={5}
                  className="w-full"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2000</span>
                  <span>2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Layer Selection */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Data Layers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <Button
                      key={layer.id}
                      variant={selectedLayer === layer.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLayer(layer.id)}
                    >
                      <Icon className={`w-4 h-4 mr-2 ${layer.color}`} />
                      {layer.label}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Current Data */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{selectedYear[0]} Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fire Hotspots</span>
                  <Badge variant="destructive">{currentData.fires.toLocaleString()}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pollution Index</span>
                  <Badge variant="outline">{currentData.pollutionIndex}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Flood Events</span>
                  <Badge variant="secondary">{currentData.floodEvents}</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Map Area */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card h-[600px]">
              <CardContent className="p-6 h-full">
                <div className="w-full h-full bg-gradient-to-br from-background-secondary to-background rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🌍</div>
                    <div className="text-xl font-semibold">Interactive Map</div>
                    <div className="text-muted-foreground max-w-md">
                      This is where the Mapbox interactive map would be integrated, showing {layers.find(l => l.id === selectedLayer)?.label.toLowerCase()} for the year {selectedYear[0]}.
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-primary">
                        • Terra MODIS fire detection data
                      </div>
                      <div className="text-sm text-secondary">
                        • MISR aerosol and pollution tracking
                      </div>
                      <div className="text-sm text-accent">
                        • ASTER elevation and flood mapping
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story Cards Preview */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <motion.div
                className="glass-card p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                <div className="text-sm font-semibold text-primary mb-2">Bangladesh</div>
                <div className="text-xs text-muted-foreground">
                  Rising sea levels impact coastal communities
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                <div className="text-sm font-semibold text-secondary mb-2">California</div>
                <div className="text-xs text-muted-foreground">
                  Wildfire smoke affects urban air quality
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                <div className="text-sm font-semibold text-accent mb-2">Amazon</div>
                <div className="text-xs text-muted-foreground">
                  Deforestation impacts global carbon cycle
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Atlas;