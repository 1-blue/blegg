import { Controller, Get, Param } from "@nestjs/common";

import { ItemService } from "./item.service";

import type {
  ApiResponseItem,
  ApiResponseItems,
} from "./interface/item.interface";

@Controller("riot/item")
export class ItemController {
  private readonly itemService: ItemService;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<ApiResponseItem> {
    return this.itemService.findOne(id);
  }

  @Get()
  async findAll(): Promise<ApiResponseItems> {
    return this.itemService.findAll();
  }
}
