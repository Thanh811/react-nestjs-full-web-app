import { Connection, getConnectionOptions } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () => (
      Object.assign(await getConnectionOptions(
        process.env.NODE_ENV = "production" ? "prod" : "default"
      ))
    )
  })],
  exports: [TypeOrmModule]
})

export class DatabaseModule {
  constructor(connection: Connection) {
    if(connection.isConnected) console.log("DB connection");
    
  }
}