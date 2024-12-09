import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OpenAiController } from './openai.controller';
import { OpenAiService } from './openai.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [OpenAiController],
  providers: [OpenAiService],
})
export class OpenaiModule {}
