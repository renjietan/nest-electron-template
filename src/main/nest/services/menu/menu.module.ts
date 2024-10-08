import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysMenuEntity } from '../../entities/sys_menu';

@Module({
  imports: [
    TypeOrmModule.forFeature([SysMenuEntity])
  ],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService]
})
export class MenuModule {}
