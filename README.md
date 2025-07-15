# Buzzword MCP Server

An MCP (Model Context Protocol) server for handling lead capture and email automation.

## Quick Deploy to Railway

1. Push this code to GitHub (already set up for https://github.com/BuzzwordStrategies/Agents-V1.git)
2. In Railway dashboard:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose the "Agents-V1" repository
   - Railway will auto-detect and deploy

## Environment Variables

Set these in Railway's Variables tab:

```
PORT=3000
JWT_SECRET=your-secret-key-12345
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

## Available Endpoints

- `GET /health` - Health check
- `GET /mcp/tools` - List available tools
- `POST /mcp` - Execute MCP tools

## MCP Tools

- `followup_capture_lead` - Capture new leads
- `followup_send_email` - Send follow-up emails

## Local Development

```bash
npm install
npm start
```

Server runs on http://localhost:3000