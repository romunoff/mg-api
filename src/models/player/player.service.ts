import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(@InjectRepository(Player) private readonly playerRepository: Repository<Player>) {}

  async getAllPlayers() {
    return await this.playerRepository.find();
  }

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    const player = await this.playerRepository.findOne({
      where: {
        username: createPlayerDto.username,
      },
    });

    if (player) {
      throw new BadRequestException('This username has already existed!');
    }

    const user = await this.playerRepository.save({
      username: createPlayerDto.username,
    });

    return { user };
  }
}
