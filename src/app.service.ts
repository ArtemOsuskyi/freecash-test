import { Injectable }  from '@nestjs/common';
import { Offer }       from './entities/offer.entity';
import { ResponseDto } from './response.dto';
import { payload1 }    from "./offer1.payload";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async mapToEntity(payload) {
  }
}
