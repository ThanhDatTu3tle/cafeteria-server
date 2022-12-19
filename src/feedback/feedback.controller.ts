import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Feedback - Bảng Ykienkhachhang')
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

  @Get(':email')
  async findCustomer(@Param('email') email: string) {
    return this.feedbackService.findCustomer(email);
  }

  @Patch(':maYKien')
  async update(@Param('maYKien') maYKien: string, @Body() updateFeedbackDto: UpdateFeedbackDto, @Res() res: Response) {
    if (!updateFeedbackDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateFeedback = await this.feedbackService.update(
        maYKien, 
        updateFeedbackDto,
      );
      res.status(200).json({ success: true, body: updateFeedback });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maYKien')
  async remove(@Param('maYKien') maYKien: string, @Res() res: Response) {
    if (!maYKien) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteFeedback = await this.feedbackService.remove(maYKien);
      res.status(200).json({ success: true, body: deleteFeedback });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
