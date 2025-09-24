import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, Globe, TrendingUp } from "lucide-react";
import bangladeshFloods from "@/assets/bangladesh-floods.jpg";
import californiaFires from "@/assets/california-fires.jpg";
import amazonDeforestation from "@/assets/amazon-deforestation.jpg";

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const stories = [
    {
      id: 1,
      region: "Bangladesh",
      title: "Rising Tides in Coastal Villages",
      summary: "Sea-level rise has displaced thousands of families from their ancestral homes.",
      image: bangladeshFloods,
      terraData: { 
        modis: "flood_extent", 
        aster: "elevation_loss",
        year: "2020-2025",
        impact: "15,000 families displaced"
      },
      videoUrl: "/videos/bangladesh_flood.mp4",
      languages: ["en", "bn"],
      description: "Through ASTER elevation mapping and MODIS flood detection, we track how rising sea levels in the Bay of Bengal have inundated coastal villages in Bangladesh. Local families share their stories of adaptation and resilience.",
      stats: {
        seaLevelRise: "3.2mm/year",
        affectedArea: "2,400 km²",
        displacement: "15,000 families"
      }
    },
    {
      id: 2,
      region: "California, USA",
      title: "Wildfire Smoke & Health Crisis",
      summary: "MODIS fire hotspots and MISR plume tracking reveal smoke spread to urban areas.",
      image: californiaFires,
      terraData: { 
        modis: "fire_hotspots", 
        misr: "aerosol_plumes",
        year: "2020-2025",
        impact: "2.3M people affected by smoke"
      },
      videoUrl: "/videos/california_fire.mp4",
      languages: ["en", "es"],
      description: "Terra's MODIS instrument detects fire hotspots while MISR tracks aerosol plumes, showing how wildfire smoke travels hundreds of miles to affect urban populations. Healthcare workers and residents share their experiences during fire seasons.",
      stats: {
        fireArea: "4.2M acres burned",
        smokeTravel: "500+ miles",
        healthImpact: "2.3M people"
      }
    },
    {
      id: 3,
      region: "Amazon, Brazil",
      title: "Deforestation & Climate Flux",
      summary: "CERES energy imbalance measurements linked to accelerating forest loss.",
      image: amazonDeforestation,
      terraData: { 
        modis: "vegetation_loss", 
        ceres: "energy_flux",
        year: "2000-2025",
        impact: "17% forest cover lost"
      },
      videoUrl: "/videos/amazon_deforestation.mp4",
      languages: ["en", "pt"],
      description: "Using MODIS vegetation indices and CERES energy balance measurements, we document how Amazon deforestation affects global climate patterns. Indigenous communities share their traditional knowledge and conservation efforts.",
      stats: {
        forestLoss: "17% since 2000",
        carbonRelease: "1.5 Gt CO₂",
        biodiversity: "30,000 species affected"
      }
    }
  ];

  const languageNames = {
    en: "English",
    bn: "বাংলা",
    es: "Español",
    pt: "Português"
  };

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
            Voices of Terra Story Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal narratives from communities around the world, powered by Terra satellite data
          </p>
        </motion.div>

        {/* Language Filter */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Filter by language:</span>
            {Object.entries(languageNames).map(([code, name]) => (
              <Button
                key={code}
                variant={selectedLanguage === code ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(code)}
              >
                {name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories
            .filter(story => story.languages.includes(selectedLanguage))
            .map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="glass-card group cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedStory(story)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{story.region}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-1">{story.title}</h3>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center glow-primary">
                        <Play className="w-5 h-5 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">{story.summary}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Terra Data:</span>
                        <span className="text-primary">{story.terraData.modis}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Period:</span>
                        <span className="text-secondary">{story.terraData.year}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="text-accent">{story.terraData.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gradient">
                    {selectedStory.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Video Placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-background-secondary to-background rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">Video Story</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedStory.region} • Terra Satellite Data Visualization
                      </div>
                    </div>
                  </div>

                  {/* Description and Data */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Story</h3>
                      <p className="text-muted-foreground">{selectedStory.description}</p>
                      
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Available in: {selectedStory.languages.map(lang => languageNames[lang as keyof typeof languageNames]).join(", ")}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                        Impact Statistics
                      </h3>
                      <div className="glass-card p-4 rounded-lg space-y-3">
                        {Object.entries(selectedStory.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <Badge variant="outline">{String(value)}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Stories;