import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, MessageCircle, Instagram, Quote, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { MessageForm } from '@/components/ui/message-form';

export const Testimonials: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const testimonials = [
    {
      message: "I've been trying to apologize to my best friend for months. Say It For You helped me find the perfect words and my friend actually cried when they saw the reel. We're closer than ever now. 💙",
      type: "Apology",
      emoji: "🙏",
      outcome: "Friendship restored",
      anonymous: true
    },
    {
      message: "As an introvert, telling someone I liked them felt impossible. The team created such a beautiful reel that my crush actually reached out first! We're dating now. ✨",
      type: "Love Confession",
      emoji: "💕",
      outcome: "New relationship",
      anonymous: true
    },
    {
      message: "I wanted to tell my mom how much she means to me but I'm not good with emotional words. The Mother's Day reel they made had us both in tears. Best decision ever.",
      type: "Family Appreciation",
      emoji: "👨‍👩‍👧‍👦",
      outcome: "Deeper family bond",
      anonymous: false
    },
    {
      message: "My social anxiety makes it hard to express gratitude. Say It For You helped me thank my teacher who changed my life. She shared it on her story and said it made her year!",
      type: "Appreciation",
      emoji: "🫶",
      outcome: "Teacher was touched",
      anonymous: true
    },
    {
      message: "I had something important to say about mental health awareness but couldn't find my voice. Their reel reached thousands and started real conversations.",
      type: "Social Message",
      emoji: "💭",
      outcome: "Social impact created",
      anonymous: false
    },
    {
      message: "Been carrying guilt for years about something I did to a friend. The apology reel was so heartfelt that my friend called me crying and forgave me instantly.",
      type: "Apology",
      emoji: "💔",
      outcome: "Forgiveness received",
      anonymous: true
    }
  ];

  const stats = [
    { icon: MessageCircle, value: '2,500+', label: 'Messages Delivered', color: 'text-primary' },
    { icon: Heart, value: '95%', label: 'Positive Responses', color: 'text-red-500' },
    { icon: Users, value: '89%', label: 'Improved Relationships', color: 'text-green-500' },
    { icon: TrendingUp, value: '4.9/5', label: 'Average Rating', color: 'text-yellow-500' }
  ];

  const impactStories = [
    {
      title: "The Reunion",
      story: "Two childhood friends who hadn't spoken in 5 years reunited after one sent an apology through our platform. They're planning to be each other's best man now.",
      emoji: "👫"
    },
    {
      title: "The Proposal",
      story: "A shy partner used our service to express their feelings, which gave them the confidence to propose in person. They're engaged now!",
      emoji: "💍"
    },
    {
      title: "The Family Healing",
      story: "A daughter who struggled to communicate with her father used our platform. Their relationship completely transformed, and they now talk daily.",
      emoji: "👨‍👧"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories, Real Hearts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            These are the moments that make what we do worthwhile. 
            Real people, real emotions, real connections. Every story here represents a heart that found its voice. 💙
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border bg-card/50">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every message matters. Here are some of the beautiful outcomes when hearts find their voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{testimonial.emoji}</span>
                      <div>
                        <div className="font-medium text-foreground text-sm">{testimonial.type}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.anonymous ? 'Anonymous user' : 'Verified user'}
                        </div>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 text-primary/50" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-foreground">
                        Outcome: {testimonial.outcome}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Life-Changing Moments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some messages don't just deliver words - they transform lives. 
              Here are a few stories that remind us why this work matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{story.emoji}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Who Finds Their Voice With Us?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">🤐</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Introverts & Shy People</h4>
                        <p className="text-sm text-muted-foreground">
                          "Finally found a way to express myself without the anxiety of face-to-face confrontation."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">💔</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">People with Regrets</h4>
                        <p className="text-sm text-muted-foreground">
                          "Carried guilt for years. This platform gave me the courage to finally make things right."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">💕</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Secret Admirers</h4>
                        <p className="text-sm text-muted-foreground">
                          "Couldn't risk direct rejection, but this gave me a beautiful way to share my feelings."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">😰</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Anxiety Warriors</h4>
                        <p className="text-sm text-muted-foreground">
                          "Social anxiety made emotional expression impossible. This changed everything for me."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Love */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every day, more hearts find their voice through Say It For You. 
            Your story could be next. What's weighing on your heart?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            >
              <Heart className="h-5 w-5 mr-2" />
              Share Your Heart Too
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="ios-button border-border hover:bg-accent px-8 py-4"
              onClick={() => window.open('https://instagram.com/sayitforyou.fun', '_blank')}
            >
              <Instagram className="h-5 w-5 mr-2" />
              See More Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenForm={() => setIsFormOpen(true)} />
      <MessageForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};