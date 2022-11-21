import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @ApiCreatedResponse({ type: Feedback })
  @ApiBadRequestResponse()
  async create(
    @Body() createFeedbackDto: CreateFeedbackDto,
    @Res() res: Response,
  ) {
    try {
      const newFeedback = await this.feedbackService.create(
        createFeedbackDto,
      );
      res.status(201).json({ success: true, body: newFeedback });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.feedbackService.getAll();
  }

  // @Get()
  // findAll() {
  //   return this.feedbackService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.feedbackService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto) {
  //   return this.feedbackService.update(+id, updateFeedbackDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.feedbackService.remove(+id);
  // }
}
