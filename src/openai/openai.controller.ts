import { Controller, Post, Body } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Controller('openai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('generate-readme')
  async generateReadme(@Body('prompt') prompt: string) {
    return { readme: await this.openAiService.generateReadme(prompt) };
  }
}
