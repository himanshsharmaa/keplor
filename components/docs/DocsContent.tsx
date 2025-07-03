'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';

export default function DocsContent() {
  return (
    <div className="lg:col-span-3">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Quick Start */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Quick Start Guide</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Get up and running with Keplor in minutes. This guide will walk you through 
              setting up your account, obtaining API keys, and making your first API call.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Install the SDK</h4>
                <div className="bg-muted/50 rounded-lg p-4 relative group">
                  <code className="text-sm">npm install @keplor/sdk</code>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">2. Initialize the Client</h4>
                <div className="bg-muted/50 rounded-lg p-4 relative group">
                  <pre className="text-sm overflow-x-auto">
{`import { Keplor } from '@keplor/sdk';

const keplor = new Keplor({
  apiKey: 'your-api-key-here'
});`}
                  </pre>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">3. Make Your First Request</h4>
                <div className="bg-muted/50 rounded-lg p-4 relative group">
                  <pre className="text-sm overflow-x-auto">
{`const response = await keplor.ai.generate({
  prompt: "Hello, Keplor!",
  model: "gpt-4"
});

console.log(response.text);`}
                  </pre>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Reference */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Complete reference for all Keplor API endpoints, including request/response formats, 
              authentication, and error handling.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">AI Generation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate text, images, and other content using AI models.
                </p>
                <Button variant="outline" size="sm">
                  View Endpoints
                </Button>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Model Management</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Manage and deploy custom AI models.
                </p>
                <Button variant="outline" size="sm">
                  View Endpoints
                </Button>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Access usage analytics and performance metrics.
                </p>
                <Button variant="outline" size="sm">
                  View Endpoints
                </Button>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Webhooks</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Set up real-time notifications for events.
                </p>
                <Button variant="outline" size="sm">
                  View Endpoints
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SDKs */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Official SDKs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Use our official SDKs to integrate Keplor into your applications quickly and easily.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">JavaScript/Node.js</h4>
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-sm">npm install @keplor/sdk</code>
                </div>
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Python</h4>
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-sm">pip install keplor-python</code>
                </div>
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Go</h4>
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-sm">go get github.com/keplor/go-sdk</code>
                </div>
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">PHP</h4>
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-sm">composer require keplor/php-sdk</code>
                </div>
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}