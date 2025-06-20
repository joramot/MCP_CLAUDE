import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// create a new MCP server instance
const server = new McpServer({ 
    name: 'DEMO MCP Server',
    version: '1.0.0',
})

// define tools

server.tool(
  'fetch-weather', //title tool
  'tool to fetch weather of a city', // description tool
  {
    city: z.string().describe('The name of the city to fetch the weather for'),
  },
  async ({ city }) => {
    return {
    content: [
        {
          type: 'text',
          text: `The weather in ${city} is sunny with a temperature of 25°C.`
        }
      ]    
    } 
  }
);