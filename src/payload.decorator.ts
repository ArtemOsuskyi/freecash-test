import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ResponseDto }                            from "./response.dto";

export const PayloadTransform = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(data);
    return { data, request };
  },
);
