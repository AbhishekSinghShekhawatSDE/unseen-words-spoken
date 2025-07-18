import React from 'react';
import { Heart, Instagram, Shield, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onOpenForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenForm }) => {
  return (
    <>
      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-4 glass-effect border-t border-border/50 md:hidden">
        <Button
          onClick={onOpenForm}
          className="w-full ios-button bg-primary hover:bg-primary/90 text-primary-foreground py-3"
        >
          <Heart className="h-4 w-4 mr-2" />
          Feeling something? Let us say it for you 💙
        </Button>
      </div>

      {/* Main Footer */}
      <footer className="bg-muted/30 border-t border-border/50 mt-20 mb-20 md:mb-0">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Say It For You</h3>
                  <p className="text-xs text-muted-foreground">Express your heart 💙</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping introverted hearts express what words cannot. 
                Your emotions deserve to be heard.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </a>
                <a href="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </a>
              </div>
            </div>

            {/* Privacy */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Privacy & Trust</h4>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>100% Anonymous Options</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>Human-Reviewed Messages</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>No Data Sharing</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Connect</h4>
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://instagram.com/sayitforyou.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@sayitforyou.fun</span>
                </a>
                <a 
                  href="mailto:hello@sayitforyou.fun"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@sayitforyou.fun</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Made with 💙 for every heart that struggles to speak. 
              <br className="hidden sm:inline" />
              © 2024 Say It For You. All emotions handled with care.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};