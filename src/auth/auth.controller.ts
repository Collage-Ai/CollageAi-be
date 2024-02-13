import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Public } from 'src/app.decorator';

@Controller('user')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginUserDto: CreateUserDto) {
    const { name, password } = loginUserDto;
    return this.AuthService.login(name, password);
  }
}
