import { Injectable } from "@nestjs/common";

import { AuthRepository } from "./auth.repository";

import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {
  private readonly authRepository: AuthRepository;
  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  /** 2023/07/05 - 회원가입 - by 1-blue */
  async signUp(body: SignInDto) {
    try {
      await Promise.all([
        this.authRepository.isDuplicateId(body.id),
        this.authRepository.isDuplicateNickname(body.nickname),
        this.authRepository.isDuplicateSummonerName(body.summonerName),
      ]);
    } catch (error) {
      throw error;
    }

    return this.authRepository.createUser(body);
  }
}
