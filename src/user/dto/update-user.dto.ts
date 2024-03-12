import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id?: number;
  skillPoint1: any;
  SkillPoint2: any;
  SkillPoint3: any;
  stageAnalysis: any;
}
