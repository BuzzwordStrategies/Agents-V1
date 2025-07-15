import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: '1.0.0' });
});

// Simple test endpoint
app.post('/mcp', async (req, res) => {
  const { tool, arguments: args } = req.body;
  
  console.log('Received request for tool:', tool);
  console.log('Arguments:', args);
  
  // For now, just echo back success
  res.json({ 
    success: true, 
    result: {
      message: `Tool ${tool} executed successfully`,
      receivedArgs: args
    }
  });
});

// List available tools
app.get('/mcp/tools', (req, res) => {
  res.json({
    tools: [
      {
        name: 'followup_capture_lead',
        description: 'Capture a new lead',
        parameters: ['name', 'email', 'phone', 'company', 'source']
      },
      {
        name: 'followup_send_email',
        description: 'Send follow-up email',
        parameters: ['to_email', 'subject', 'body']
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
});
