import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  Download, 
  Play, 
  Smartphone, 
  Eye, 
  Zap,
  Globe,
  TrendingUp,
  Thermometer
} from "lucide-react";

const VRDemo = () => {
  const vrFeatures = [
    {
      icon: Globe,
      title: "360° Earth Explorer",
      description: "Navigate around Earth in full 360° view with authentic Terra satellite imagery",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Climate Hotspots",
      description: "Interactive hotspots showing wildfire zones, urban heat islands, and glacier retreat",
      color: "text-secondary"
    },
    {
      icon: Thermometer,
      title: "Temperature Visualization",
      description: "See temperature changes over time with thermal imaging from Terra's MODIS instrument",
      color: "text-accent"
    },
    {
      icon: Eye,
      title: "Data Overlays",
      description: "Toggle between different Terra instrument views: MODIS, MISR, ASTER, and CERES",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Time-lapse Mode",
      description: "Watch 25 years of climate change unfold in accelerated time-lapse sequences",
      color: "text-secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile Compatible",
      description: "Works with Google Cardboard and any smartphone for accessible VR experience",
      color: "text-accent"
    }
  ];

  const hotspots = [
    { name: "Arctic Ice Sheet", impact: "30% ice loss", type: "Glacier Retreat" },
    { name: "Amazon Basin", impact: "17% deforestation", type: "Forest Loss" },
    { name: "Sahara Desert", impact: "Expanding 48km/year", type: "Desertification" },
    { name: "Coral Triangle", impact: "50% bleaching", type: "Ocean Warming" },
    { name: "Himalayan Glaciers", impact: "0.3m/year retreat", type: "Ice Melt" }
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
            Earth in Motion: VR Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in 25 years of Terra satellite data through virtual reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* VR Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-background-secondary via-background to-background-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simulated VR View */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-cosmic opacity-80" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        className="w-32 h-32 border-2 border-primary rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-20 h-20 bg-gradient-terra rounded-full animate-glow" />
                      </motion.div>
                    </div>
                    
                    {/* VR Interface Elements */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <Badge variant="secondary">VR Mode</Badge>
                      <Badge variant="outline">Terra MODIS</Badge>
                    </div>
                    
                    {/* Hotspot indicators */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-accent rounded-full glow-secondary"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 20}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="hero" size="lg" className="group">
                      <Play className="w-6 h-6" />
                      Preview VR Experience
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-center">Get the VR App</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="cosmic" size="lg" className="group">
                  <Download className="w-5 h-5" />
                  Android APK
                </Button>
                <Button variant="hero" size="lg" className="group">
                  <Smartphone className="w-5 h-5" />
                  iOS App Store
                </Button>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Compatible with Google Cardboard and most VR headsets
              </div>
            </div>
          </motion.div>

          {/* Features & Instructions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-primary" />
                  VR Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {vrFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Icon className={`w-5 h-5 mt-1 ${feature.color}`} />
                      <div>
                        <div className="font-medium text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">1</div>
                  <span className="text-sm">Download the TerraX VR app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">2</div>
                  <span className="text-sm">Insert phone into Google Cardboard or VR headset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">3</div>
                  <span className="text-sm">Use gaze controls to navigate and select hotspots</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Climate Hotspots Preview */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gradient mb-8">
            Explore Climate Hotspots
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {hotspots.map((hotspot, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-gradient-terra rounded-full mx-auto mb-3 animate-glow" />
                <h3 className="font-semibold text-sm mb-2">{hotspot.name}</h3>
                <Badge variant="outline" className="text-xs mb-2">{hotspot.type}</Badge>
                <div className="text-xs text-muted-foreground">{hotspot.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* System Requirements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">System Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Minimum</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Smartphone with gyroscope</div>
                    <div>• Android 7.0+ or iOS 12+</div>
                    <div>• 2GB RAM</div>
                    <div>• Google Cardboard compatible</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Recommended</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• High-resolution display (1080p+)</div>
                    <div>• 4GB+ RAM</div>
                    <div>• Dedicated VR headset</div>
                    <div>• Stable internet connection</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default VRDemo;