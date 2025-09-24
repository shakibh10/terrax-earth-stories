import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Headphones, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import EarthGlobe from "@/components/EarthGlobe";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gradient">TerraX:</span>
                <br />
                <span className="text-foreground">Voices of</span>
                <br />
                <span className="text-aurora">Earth</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                25 years of Terra satellite data reimagined through human stories.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/atlas">
                <Button variant="hero" size="lg" className="group">
                  <BarChart3 className="w-5 h-5" />
                  Explore Atlas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/stories">
                <Button variant="glass" size="lg" className="group">
                  <Play className="w-5 h-5" />
                  Watch Stories
                </Button>
              </Link>
              
              <Link to="/vr-demo">
                <Button variant="cosmic" size="lg" className="group">
                  <Headphones className="w-5 h-5" />
                  Try VR Demo
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years of Data</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">195</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Earth Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <EarthGlobe />
          </motion.div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Connecting Data to Humanity
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            TerraX transforms 25 years of NASA's Terra satellite observations into compelling human narratives. 
            By combining MODIS fire detection, MISR aerosol tracking, ASTER elevation mapping, and CERES energy 
            measurements with personal stories from affected communities, we create a bridge between global data 
            and local impact.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-card p-6 rounded-lg">
              <BarChart3 className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Interactive Atlas</h3>
              <p className="text-muted-foreground text-sm">
                Explore 25 years of Terra data through interactive maps and timelines
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Play className="w-8 h-8 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Human Stories</h3>
              <p className="text-muted-foreground text-sm">
                Personal narratives from communities affected by climate change
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Headphones className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">VR Experience</h3>
              <p className="text-muted-foreground text-sm">
                Immersive Earth exploration with Google Cardboard compatibility
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;