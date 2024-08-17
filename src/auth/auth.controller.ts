import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() userDto: UserDto) {
    return await this.authService.login(userDto);
  }

  @Post('register')
  async register(@Body() userDto: UserDto) {
    return await this.authService.register(userDto);
  }
}
