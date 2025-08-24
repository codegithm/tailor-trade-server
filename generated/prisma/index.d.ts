
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Design
 * 
 */
export type Design = $Result.DefaultSelection<Prisma.$DesignPayload>
/**
 * Model CustomRequest
 * 
 */
export type CustomRequest = $Result.DefaultSelection<Prisma.$CustomRequestPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Measurement
 * 
 */
export type Measurement = $Result.DefaultSelection<Prisma.$MeasurementPayload>
/**
 * Model ChatChannel
 * 
 */
export type ChatChannel = $Result.DefaultSelection<Prisma.$ChatChannelPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  CUSTOMER: 'CUSTOMER',
  TAILOR: 'TAILOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DesignCategory: {
  FORMAL: 'FORMAL',
  BUSINESS: 'BUSINESS',
  CASUAL: 'CASUAL',
  SEMI_FORMAL: 'SEMI_FORMAL'
};

export type DesignCategory = (typeof DesignCategory)[keyof typeof DesignCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DesignCategory = $Enums.DesignCategory

export const DesignCategory: typeof $Enums.DesignCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.design`: Exposes CRUD operations for the **Design** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Designs
    * const designs = await prisma.design.findMany()
    * ```
    */
  get design(): Prisma.DesignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customRequest`: Exposes CRUD operations for the **CustomRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomRequests
    * const customRequests = await prisma.customRequest.findMany()
    * ```
    */
  get customRequest(): Prisma.CustomRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **Measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.MeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatChannel`: Exposes CRUD operations for the **ChatChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatChannels
    * const chatChannels = await prisma.chatChannel.findMany()
    * ```
    */
  get chatChannel(): Prisma.ChatChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Design: 'Design',
    CustomRequest: 'CustomRequest',
    Bid: 'Bid',
    ChatRoom: 'ChatRoom',
    ChatMessage: 'ChatMessage',
    Measurement: 'Measurement',
    ChatChannel: 'ChatChannel',
    Notification: 'Notification',
    Log: 'Log',
    Category: 'Category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "design" | "customRequest" | "bid" | "chatRoom" | "chatMessage" | "measurement" | "chatChannel" | "notification" | "log" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Design: {
        payload: Prisma.$DesignPayload<ExtArgs>
        fields: Prisma.DesignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findFirst: {
            args: Prisma.DesignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findMany: {
            args: Prisma.DesignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          create: {
            args: Prisma.DesignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          createMany: {
            args: Prisma.DesignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          delete: {
            args: Prisma.DesignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          update: {
            args: Prisma.DesignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          deleteMany: {
            args: Prisma.DesignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          upsert: {
            args: Prisma.DesignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          aggregate: {
            args: Prisma.DesignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesign>
          }
          groupBy: {
            args: Prisma.DesignGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignCountArgs<ExtArgs>
            result: $Utils.Optional<DesignCountAggregateOutputType> | number
          }
        }
      }
      CustomRequest: {
        payload: Prisma.$CustomRequestPayload<ExtArgs>
        fields: Prisma.CustomRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          findFirst: {
            args: Prisma.CustomRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          findMany: {
            args: Prisma.CustomRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>[]
          }
          create: {
            args: Prisma.CustomRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          createMany: {
            args: Prisma.CustomRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>[]
          }
          delete: {
            args: Prisma.CustomRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          update: {
            args: Prisma.CustomRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          deleteMany: {
            args: Prisma.CustomRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>[]
          }
          upsert: {
            args: Prisma.CustomRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomRequestPayload>
          }
          aggregate: {
            args: Prisma.CustomRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomRequest>
          }
          groupBy: {
            args: Prisma.CustomRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CustomRequestCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Measurement: {
        payload: Prisma.$MeasurementPayload<ExtArgs>
        fields: Prisma.MeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findFirst: {
            args: Prisma.MeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findMany: {
            args: Prisma.MeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          create: {
            args: Prisma.MeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          createMany: {
            args: Prisma.MeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          delete: {
            args: Prisma.MeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          update: {
            args: Prisma.MeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          upsert: {
            args: Prisma.MeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.MeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      ChatChannel: {
        payload: Prisma.$ChatChannelPayload<ExtArgs>
        fields: Prisma.ChatChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          findFirst: {
            args: Prisma.ChatChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          findMany: {
            args: Prisma.ChatChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>[]
          }
          create: {
            args: Prisma.ChatChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          createMany: {
            args: Prisma.ChatChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>[]
          }
          delete: {
            args: Prisma.ChatChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          update: {
            args: Prisma.ChatChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChatChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChatChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatChannelPayload>
          }
          aggregate: {
            args: Prisma.ChatChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatChannel>
          }
          groupBy: {
            args: Prisma.ChatChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChatChannelCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    design?: DesignOmit
    customRequest?: CustomRequestOmit
    bid?: BidOmit
    chatRoom?: ChatRoomOmit
    chatMessage?: ChatMessageOmit
    measurement?: MeasurementOmit
    chatChannel?: ChatChannelOmit
    notification?: NotificationOmit
    log?: LogOmit
    category?: CategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    designs: number
    customRequests: number
    bids: number
    chatRooms: number
    sentMessages: number
    receivedMessages: number
    measurements: number
    chatChannels: number
    acceptedRequests: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designs?: boolean | UserCountOutputTypeCountDesignsArgs
    customRequests?: boolean | UserCountOutputTypeCountCustomRequestsArgs
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    chatRooms?: boolean | UserCountOutputTypeCountChatRoomsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    measurements?: boolean | UserCountOutputTypeCountMeasurementsArgs
    chatChannels?: boolean | UserCountOutputTypeCountChatChannelsArgs
    acceptedRequests?: boolean | UserCountOutputTypeCountAcceptedRequestsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDesignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAcceptedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DesignCountOutputType
   */

  export type DesignCountOutputType = {
    chatChannels: number
  }

  export type DesignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatChannels?: boolean | DesignCountOutputTypeCountChatChannelsArgs
  }

  // Custom InputTypes
  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignCountOutputType
     */
    select?: DesignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeCountChatChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatChannelWhereInput
  }


  /**
   * Count Type CustomRequestCountOutputType
   */

  export type CustomRequestCountOutputType = {
    bids: number
    messages: number
    notifications: number
  }

  export type CustomRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | CustomRequestCountOutputTypeCountBidsArgs
    messages?: boolean | CustomRequestCountOutputTypeCountMessagesArgs
    notifications?: boolean | CustomRequestCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * CustomRequestCountOutputType without action
   */
  export type CustomRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequestCountOutputType
     */
    select?: CustomRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomRequestCountOutputType without action
   */
  export type CustomRequestCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * CustomRequestCountOutputType without action
   */
  export type CustomRequestCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * CustomRequestCountOutputType without action
   */
  export type CustomRequestCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    participants: number
    messages: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ChatRoomCountOutputTypeCountParticipantsArgs
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ChatChannelCountOutputType
   */

  export type ChatChannelCountOutputType = {
    participants: number
  }

  export type ChatChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ChatChannelCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ChatChannelCountOutputType without action
   */
  export type ChatChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannelCountOutputType
     */
    select?: ChatChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatChannelCountOutputType without action
   */
  export type ChatChannelCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    password: string | null
    avatarUrl: string | null
    bio: string | null
    location: string | null
    streamId: string | null
    emailVerified: boolean | null
    verificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    password: string | null
    avatarUrl: string | null
    bio: string | null
    location: string | null
    streamId: string | null
    emailVerified: boolean | null
    verificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    avatarUrl: number
    bio: number
    location: number
    streamId: number
    emailVerified: number
    verificationToken: number
    resetToken: number
    resetTokenExpiry: number
    refreshToken: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    avatarUrl?: true
    bio?: true
    location?: true
    streamId?: true
    emailVerified?: true
    verificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    avatarUrl?: true
    bio?: true
    location?: true
    streamId?: true
    emailVerified?: true
    verificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    avatarUrl?: true
    bio?: true
    location?: true
    streamId?: true
    emailVerified?: true
    verificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl: string | null
    bio: string | null
    location: string | null
    streamId: string | null
    emailVerified: boolean
    verificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    refreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    location?: boolean
    streamId?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    refreshToken?: boolean
    designs?: boolean | User$designsArgs<ExtArgs>
    customRequests?: boolean | User$customRequestsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    measurements?: boolean | User$measurementsArgs<ExtArgs>
    chatChannels?: boolean | User$chatChannelsArgs<ExtArgs>
    acceptedRequests?: boolean | User$acceptedRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    location?: boolean
    streamId?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    location?: boolean
    streamId?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    location?: boolean
    streamId?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    refreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "password" | "avatarUrl" | "bio" | "location" | "streamId" | "emailVerified" | "verificationToken" | "resetToken" | "resetTokenExpiry" | "refreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designs?: boolean | User$designsArgs<ExtArgs>
    customRequests?: boolean | User$customRequestsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    measurements?: boolean | User$measurementsArgs<ExtArgs>
    chatChannels?: boolean | User$chatChannelsArgs<ExtArgs>
    acceptedRequests?: boolean | User$acceptedRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      designs: Prisma.$DesignPayload<ExtArgs>[]
      customRequests: Prisma.$CustomRequestPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      chatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      sentMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      chatChannels: Prisma.$ChatChannelPayload<ExtArgs>[]
      acceptedRequests: Prisma.$CustomRequestPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.UserRole
      password: string
      avatarUrl: string | null
      bio: string | null
      location: string | null
      streamId: string | null
      emailVerified: boolean
      verificationToken: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      refreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    designs<T extends User$designsArgs<ExtArgs> = {}>(args?: Subset<T, User$designsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customRequests<T extends User$customRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$customRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRooms<T extends User$chatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measurements<T extends User$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, User$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatChannels<T extends User$chatChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptedRequests<T extends User$acceptedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$acceptedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly streamId: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.designs
   */
  export type User$designsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    where?: DesignWhereInput
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    cursor?: DesignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * User.customRequests
   */
  export type User$customRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    where?: CustomRequestWhereInput
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    cursor?: CustomRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomRequestScalarFieldEnum | CustomRequestScalarFieldEnum[]
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.chatRooms
   */
  export type User$chatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.measurements
   */
  export type User$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * User.chatChannels
   */
  export type User$chatChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    where?: ChatChannelWhereInput
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    cursor?: ChatChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatChannelScalarFieldEnum | ChatChannelScalarFieldEnum[]
  }

  /**
   * User.acceptedRequests
   */
  export type User$acceptedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    where?: CustomRequestWhereInput
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    cursor?: CustomRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomRequestScalarFieldEnum | CustomRequestScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Design
   */

  export type AggregateDesign = {
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  export type DesignAvgAggregateOutputType = {
    price: number | null
  }

  export type DesignSumAggregateOutputType = {
    price: number | null
  }

  export type DesignMinAggregateOutputType = {
    id: string | null
    tailorId: string | null
    title: string | null
    description: string | null
    price: number | null
    category: $Enums.DesignCategory | null
    fabricType: string | null
    created: Date | null
  }

  export type DesignMaxAggregateOutputType = {
    id: string | null
    tailorId: string | null
    title: string | null
    description: string | null
    price: number | null
    category: $Enums.DesignCategory | null
    fabricType: string | null
    created: Date | null
  }

  export type DesignCountAggregateOutputType = {
    id: number
    tailorId: number
    title: number
    description: number
    price: number
    imageUrls: number
    category: number
    fabricType: number
    created: number
    availableSizes: number
    tags: number
    _all: number
  }


  export type DesignAvgAggregateInputType = {
    price?: true
  }

  export type DesignSumAggregateInputType = {
    price?: true
  }

  export type DesignMinAggregateInputType = {
    id?: true
    tailorId?: true
    title?: true
    description?: true
    price?: true
    category?: true
    fabricType?: true
    created?: true
  }

  export type DesignMaxAggregateInputType = {
    id?: true
    tailorId?: true
    title?: true
    description?: true
    price?: true
    category?: true
    fabricType?: true
    created?: true
  }

  export type DesignCountAggregateInputType = {
    id?: true
    tailorId?: true
    title?: true
    description?: true
    price?: true
    imageUrls?: true
    category?: true
    fabricType?: true
    created?: true
    availableSizes?: true
    tags?: true
    _all?: true
  }

  export type DesignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Design to aggregate.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Designs
    **/
    _count?: true | DesignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignMaxAggregateInputType
  }

  export type GetDesignAggregateType<T extends DesignAggregateArgs> = {
        [P in keyof T & keyof AggregateDesign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesign[P]>
      : GetScalarType<T[P], AggregateDesign[P]>
  }




  export type DesignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignWhereInput
    orderBy?: DesignOrderByWithAggregationInput | DesignOrderByWithAggregationInput[]
    by: DesignScalarFieldEnum[] | DesignScalarFieldEnum
    having?: DesignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignCountAggregateInputType | true
    _avg?: DesignAvgAggregateInputType
    _sum?: DesignSumAggregateInputType
    _min?: DesignMinAggregateInputType
    _max?: DesignMaxAggregateInputType
  }

  export type DesignGroupByOutputType = {
    id: string
    tailorId: string
    title: string
    description: string
    price: number
    imageUrls: string[]
    category: $Enums.DesignCategory
    fabricType: string
    created: Date
    availableSizes: string[]
    tags: string[]
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  type GetDesignGroupByPayload<T extends DesignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignGroupByOutputType[P]>
            : GetScalarType<T[P], DesignGroupByOutputType[P]>
        }
      >
    >


  export type DesignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tailorId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrls?: boolean
    category?: boolean
    fabricType?: boolean
    created?: boolean
    availableSizes?: boolean
    tags?: boolean
    tailor?: boolean | UserDefaultArgs<ExtArgs>
    chatChannels?: boolean | Design$chatChannelsArgs<ExtArgs>
    _count?: boolean | DesignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tailorId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrls?: boolean
    category?: boolean
    fabricType?: boolean
    created?: boolean
    availableSizes?: boolean
    tags?: boolean
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tailorId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrls?: boolean
    category?: boolean
    fabricType?: boolean
    created?: boolean
    availableSizes?: boolean
    tags?: boolean
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectScalar = {
    id?: boolean
    tailorId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrls?: boolean
    category?: boolean
    fabricType?: boolean
    created?: boolean
    availableSizes?: boolean
    tags?: boolean
  }

  export type DesignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tailorId" | "title" | "description" | "price" | "imageUrls" | "category" | "fabricType" | "created" | "availableSizes" | "tags", ExtArgs["result"]["design"]>
  export type DesignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tailor?: boolean | UserDefaultArgs<ExtArgs>
    chatChannels?: boolean | Design$chatChannelsArgs<ExtArgs>
    _count?: boolean | DesignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DesignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DesignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DesignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Design"
    objects: {
      tailor: Prisma.$UserPayload<ExtArgs>
      chatChannels: Prisma.$ChatChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tailorId: string
      title: string
      description: string
      price: number
      imageUrls: string[]
      category: $Enums.DesignCategory
      fabricType: string
      created: Date
      availableSizes: string[]
      tags: string[]
    }, ExtArgs["result"]["design"]>
    composites: {}
  }

  type DesignGetPayload<S extends boolean | null | undefined | DesignDefaultArgs> = $Result.GetResult<Prisma.$DesignPayload, S>

  type DesignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignCountAggregateInputType | true
    }

  export interface DesignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Design'], meta: { name: 'Design' } }
    /**
     * Find zero or one Design that matches the filter.
     * @param {DesignFindUniqueArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignFindUniqueArgs>(args: SelectSubset<T, DesignFindUniqueArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Design that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignFindUniqueOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Design that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignFindFirstArgs>(args?: SelectSubset<T, DesignFindFirstArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Design that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Designs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Designs
     * const designs = await prisma.design.findMany()
     * 
     * // Get first 10 Designs
     * const designs = await prisma.design.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designWithIdOnly = await prisma.design.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignFindManyArgs>(args?: SelectSubset<T, DesignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Design.
     * @param {DesignCreateArgs} args - Arguments to create a Design.
     * @example
     * // Create one Design
     * const Design = await prisma.design.create({
     *   data: {
     *     // ... data to create a Design
     *   }
     * })
     * 
     */
    create<T extends DesignCreateArgs>(args: SelectSubset<T, DesignCreateArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Designs.
     * @param {DesignCreateManyArgs} args - Arguments to create many Designs.
     * @example
     * // Create many Designs
     * const design = await prisma.design.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignCreateManyArgs>(args?: SelectSubset<T, DesignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Designs and returns the data saved in the database.
     * @param {DesignCreateManyAndReturnArgs} args - Arguments to create many Designs.
     * @example
     * // Create many Designs
     * const design = await prisma.design.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Designs and only return the `id`
     * const designWithIdOnly = await prisma.design.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Design.
     * @param {DesignDeleteArgs} args - Arguments to delete one Design.
     * @example
     * // Delete one Design
     * const Design = await prisma.design.delete({
     *   where: {
     *     // ... filter to delete one Design
     *   }
     * })
     * 
     */
    delete<T extends DesignDeleteArgs>(args: SelectSubset<T, DesignDeleteArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Design.
     * @param {DesignUpdateArgs} args - Arguments to update one Design.
     * @example
     * // Update one Design
     * const design = await prisma.design.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignUpdateArgs>(args: SelectSubset<T, DesignUpdateArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Designs.
     * @param {DesignDeleteManyArgs} args - Arguments to filter Designs to delete.
     * @example
     * // Delete a few Designs
     * const { count } = await prisma.design.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignDeleteManyArgs>(args?: SelectSubset<T, DesignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Designs
     * const design = await prisma.design.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignUpdateManyArgs>(args: SelectSubset<T, DesignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Designs and returns the data updated in the database.
     * @param {DesignUpdateManyAndReturnArgs} args - Arguments to update many Designs.
     * @example
     * // Update many Designs
     * const design = await prisma.design.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Designs and only return the `id`
     * const designWithIdOnly = await prisma.design.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DesignUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Design.
     * @param {DesignUpsertArgs} args - Arguments to update or create a Design.
     * @example
     * // Update or create a Design
     * const design = await prisma.design.upsert({
     *   create: {
     *     // ... data to create a Design
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Design we want to update
     *   }
     * })
     */
    upsert<T extends DesignUpsertArgs>(args: SelectSubset<T, DesignUpsertArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCountArgs} args - Arguments to filter Designs to count.
     * @example
     * // Count the number of Designs
     * const count = await prisma.design.count({
     *   where: {
     *     // ... the filter for the Designs we want to count
     *   }
     * })
    **/
    count<T extends DesignCountArgs>(
      args?: Subset<T, DesignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesignAggregateArgs>(args: Subset<T, DesignAggregateArgs>): Prisma.PrismaPromise<GetDesignAggregateType<T>>

    /**
     * Group by Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignGroupByArgs['orderBy'] }
        : { orderBy?: DesignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Design model
   */
  readonly fields: DesignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Design.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tailor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatChannels<T extends Design$chatChannelsArgs<ExtArgs> = {}>(args?: Subset<T, Design$chatChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Design model
   */
  interface DesignFieldRefs {
    readonly id: FieldRef<"Design", 'String'>
    readonly tailorId: FieldRef<"Design", 'String'>
    readonly title: FieldRef<"Design", 'String'>
    readonly description: FieldRef<"Design", 'String'>
    readonly price: FieldRef<"Design", 'Int'>
    readonly imageUrls: FieldRef<"Design", 'String[]'>
    readonly category: FieldRef<"Design", 'DesignCategory'>
    readonly fabricType: FieldRef<"Design", 'String'>
    readonly created: FieldRef<"Design", 'DateTime'>
    readonly availableSizes: FieldRef<"Design", 'String[]'>
    readonly tags: FieldRef<"Design", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Design findUnique
   */
  export type DesignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design findUniqueOrThrow
   */
  export type DesignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design findFirst
   */
  export type DesignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design findFirstOrThrow
   */
  export type DesignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design findMany
   */
  export type DesignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Designs to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design create
   */
  export type DesignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The data needed to create a Design.
     */
    data: XOR<DesignCreateInput, DesignUncheckedCreateInput>
  }

  /**
   * Design createMany
   */
  export type DesignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Designs.
     */
    data: DesignCreateManyInput | DesignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Design createManyAndReturn
   */
  export type DesignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * The data used to create many Designs.
     */
    data: DesignCreateManyInput | DesignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Design update
   */
  export type DesignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The data needed to update a Design.
     */
    data: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
    /**
     * Choose, which Design to update.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design updateMany
   */
  export type DesignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Designs.
     */
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyInput>
    /**
     * Filter which Designs to update
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to update.
     */
    limit?: number
  }

  /**
   * Design updateManyAndReturn
   */
  export type DesignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * The data used to update Designs.
     */
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyInput>
    /**
     * Filter which Designs to update
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Design upsert
   */
  export type DesignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The filter to search for the Design to update in case it exists.
     */
    where: DesignWhereUniqueInput
    /**
     * In case the Design found by the `where` argument doesn't exist, create a new Design with this data.
     */
    create: XOR<DesignCreateInput, DesignUncheckedCreateInput>
    /**
     * In case the Design was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
  }

  /**
   * Design delete
   */
  export type DesignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter which Design to delete.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design deleteMany
   */
  export type DesignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Designs to delete
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to delete.
     */
    limit?: number
  }

  /**
   * Design.chatChannels
   */
  export type Design$chatChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    where?: ChatChannelWhereInput
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    cursor?: ChatChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatChannelScalarFieldEnum | ChatChannelScalarFieldEnum[]
  }

  /**
   * Design without action
   */
  export type DesignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
  }


  /**
   * Model CustomRequest
   */

  export type AggregateCustomRequest = {
    _count: CustomRequestCountAggregateOutputType | null
    _avg: CustomRequestAvgAggregateOutputType | null
    _sum: CustomRequestSumAggregateOutputType | null
    _min: CustomRequestMinAggregateOutputType | null
    _max: CustomRequestMaxAggregateOutputType | null
  }

  export type CustomRequestAvgAggregateOutputType = {
    proposedPrice: number | null
  }

  export type CustomRequestSumAggregateOutputType = {
    proposedPrice: number | null
  }

  export type CustomRequestMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    title: string | null
    description: string | null
    proposedPrice: number | null
    status: string | null
    created: Date | null
    deadline: Date | null
    imageUrl: string | null
    acceptedTailorId: string | null
  }

  export type CustomRequestMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    title: string | null
    description: string | null
    proposedPrice: number | null
    status: string | null
    created: Date | null
    deadline: Date | null
    imageUrl: string | null
    acceptedTailorId: string | null
  }

  export type CustomRequestCountAggregateOutputType = {
    id: number
    customerId: number
    title: number
    description: number
    proposedPrice: number
    status: number
    created: number
    deadline: number
    imageUrl: number
    acceptedTailorId: number
    _all: number
  }


  export type CustomRequestAvgAggregateInputType = {
    proposedPrice?: true
  }

  export type CustomRequestSumAggregateInputType = {
    proposedPrice?: true
  }

  export type CustomRequestMinAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    description?: true
    proposedPrice?: true
    status?: true
    created?: true
    deadline?: true
    imageUrl?: true
    acceptedTailorId?: true
  }

  export type CustomRequestMaxAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    description?: true
    proposedPrice?: true
    status?: true
    created?: true
    deadline?: true
    imageUrl?: true
    acceptedTailorId?: true
  }

  export type CustomRequestCountAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    description?: true
    proposedPrice?: true
    status?: true
    created?: true
    deadline?: true
    imageUrl?: true
    acceptedTailorId?: true
    _all?: true
  }

  export type CustomRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomRequest to aggregate.
     */
    where?: CustomRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomRequests to fetch.
     */
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomRequests
    **/
    _count?: true | CustomRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomRequestMaxAggregateInputType
  }

  export type GetCustomRequestAggregateType<T extends CustomRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomRequest[P]>
      : GetScalarType<T[P], AggregateCustomRequest[P]>
  }




  export type CustomRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomRequestWhereInput
    orderBy?: CustomRequestOrderByWithAggregationInput | CustomRequestOrderByWithAggregationInput[]
    by: CustomRequestScalarFieldEnum[] | CustomRequestScalarFieldEnum
    having?: CustomRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomRequestCountAggregateInputType | true
    _avg?: CustomRequestAvgAggregateInputType
    _sum?: CustomRequestSumAggregateInputType
    _min?: CustomRequestMinAggregateInputType
    _max?: CustomRequestMaxAggregateInputType
  }

  export type CustomRequestGroupByOutputType = {
    id: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date
    deadline: Date | null
    imageUrl: string | null
    acceptedTailorId: string | null
    _count: CustomRequestCountAggregateOutputType | null
    _avg: CustomRequestAvgAggregateOutputType | null
    _sum: CustomRequestSumAggregateOutputType | null
    _min: CustomRequestMinAggregateOutputType | null
    _max: CustomRequestMaxAggregateOutputType | null
  }

  type GetCustomRequestGroupByPayload<T extends CustomRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CustomRequestGroupByOutputType[P]>
        }
      >
    >


  export type CustomRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    title?: boolean
    description?: boolean
    proposedPrice?: boolean
    status?: boolean
    created?: boolean
    deadline?: boolean
    imageUrl?: boolean
    acceptedTailorId?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    bids?: boolean | CustomRequest$bidsArgs<ExtArgs>
    messages?: boolean | CustomRequest$messagesArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
    notifications?: boolean | CustomRequest$notificationsArgs<ExtArgs>
    _count?: boolean | CustomRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customRequest"]>

  export type CustomRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    title?: boolean
    description?: boolean
    proposedPrice?: boolean
    status?: boolean
    created?: boolean
    deadline?: boolean
    imageUrl?: boolean
    acceptedTailorId?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
  }, ExtArgs["result"]["customRequest"]>

  export type CustomRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    title?: boolean
    description?: boolean
    proposedPrice?: boolean
    status?: boolean
    created?: boolean
    deadline?: boolean
    imageUrl?: boolean
    acceptedTailorId?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
  }, ExtArgs["result"]["customRequest"]>

  export type CustomRequestSelectScalar = {
    id?: boolean
    customerId?: boolean
    title?: boolean
    description?: boolean
    proposedPrice?: boolean
    status?: boolean
    created?: boolean
    deadline?: boolean
    imageUrl?: boolean
    acceptedTailorId?: boolean
  }

  export type CustomRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "title" | "description" | "proposedPrice" | "status" | "created" | "deadline" | "imageUrl" | "acceptedTailorId", ExtArgs["result"]["customRequest"]>
  export type CustomRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    bids?: boolean | CustomRequest$bidsArgs<ExtArgs>
    messages?: boolean | CustomRequest$messagesArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
    notifications?: boolean | CustomRequest$notificationsArgs<ExtArgs>
    _count?: boolean | CustomRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
  }
  export type CustomRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    acceptedTailor?: boolean | CustomRequest$acceptedTailorArgs<ExtArgs>
  }

  export type $CustomRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomRequest"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      bids: Prisma.$BidPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      acceptedTailor: Prisma.$UserPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      title: string
      description: string
      proposedPrice: number
      status: string
      created: Date
      deadline: Date | null
      imageUrl: string | null
      acceptedTailorId: string | null
    }, ExtArgs["result"]["customRequest"]>
    composites: {}
  }

  type CustomRequestGetPayload<S extends boolean | null | undefined | CustomRequestDefaultArgs> = $Result.GetResult<Prisma.$CustomRequestPayload, S>

  type CustomRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomRequestCountAggregateInputType | true
    }

  export interface CustomRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomRequest'], meta: { name: 'CustomRequest' } }
    /**
     * Find zero or one CustomRequest that matches the filter.
     * @param {CustomRequestFindUniqueArgs} args - Arguments to find a CustomRequest
     * @example
     * // Get one CustomRequest
     * const customRequest = await prisma.customRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomRequestFindUniqueArgs>(args: SelectSubset<T, CustomRequestFindUniqueArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomRequestFindUniqueOrThrowArgs} args - Arguments to find a CustomRequest
     * @example
     * // Get one CustomRequest
     * const customRequest = await prisma.customRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestFindFirstArgs} args - Arguments to find a CustomRequest
     * @example
     * // Get one CustomRequest
     * const customRequest = await prisma.customRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomRequestFindFirstArgs>(args?: SelectSubset<T, CustomRequestFindFirstArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestFindFirstOrThrowArgs} args - Arguments to find a CustomRequest
     * @example
     * // Get one CustomRequest
     * const customRequest = await prisma.customRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomRequests
     * const customRequests = await prisma.customRequest.findMany()
     * 
     * // Get first 10 CustomRequests
     * const customRequests = await prisma.customRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customRequestWithIdOnly = await prisma.customRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomRequestFindManyArgs>(args?: SelectSubset<T, CustomRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomRequest.
     * @param {CustomRequestCreateArgs} args - Arguments to create a CustomRequest.
     * @example
     * // Create one CustomRequest
     * const CustomRequest = await prisma.customRequest.create({
     *   data: {
     *     // ... data to create a CustomRequest
     *   }
     * })
     * 
     */
    create<T extends CustomRequestCreateArgs>(args: SelectSubset<T, CustomRequestCreateArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomRequests.
     * @param {CustomRequestCreateManyArgs} args - Arguments to create many CustomRequests.
     * @example
     * // Create many CustomRequests
     * const customRequest = await prisma.customRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomRequestCreateManyArgs>(args?: SelectSubset<T, CustomRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomRequests and returns the data saved in the database.
     * @param {CustomRequestCreateManyAndReturnArgs} args - Arguments to create many CustomRequests.
     * @example
     * // Create many CustomRequests
     * const customRequest = await prisma.customRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomRequests and only return the `id`
     * const customRequestWithIdOnly = await prisma.customRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomRequest.
     * @param {CustomRequestDeleteArgs} args - Arguments to delete one CustomRequest.
     * @example
     * // Delete one CustomRequest
     * const CustomRequest = await prisma.customRequest.delete({
     *   where: {
     *     // ... filter to delete one CustomRequest
     *   }
     * })
     * 
     */
    delete<T extends CustomRequestDeleteArgs>(args: SelectSubset<T, CustomRequestDeleteArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomRequest.
     * @param {CustomRequestUpdateArgs} args - Arguments to update one CustomRequest.
     * @example
     * // Update one CustomRequest
     * const customRequest = await prisma.customRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomRequestUpdateArgs>(args: SelectSubset<T, CustomRequestUpdateArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomRequests.
     * @param {CustomRequestDeleteManyArgs} args - Arguments to filter CustomRequests to delete.
     * @example
     * // Delete a few CustomRequests
     * const { count } = await prisma.customRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomRequestDeleteManyArgs>(args?: SelectSubset<T, CustomRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomRequests
     * const customRequest = await prisma.customRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomRequestUpdateManyArgs>(args: SelectSubset<T, CustomRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomRequests and returns the data updated in the database.
     * @param {CustomRequestUpdateManyAndReturnArgs} args - Arguments to update many CustomRequests.
     * @example
     * // Update many CustomRequests
     * const customRequest = await prisma.customRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomRequests and only return the `id`
     * const customRequestWithIdOnly = await prisma.customRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomRequest.
     * @param {CustomRequestUpsertArgs} args - Arguments to update or create a CustomRequest.
     * @example
     * // Update or create a CustomRequest
     * const customRequest = await prisma.customRequest.upsert({
     *   create: {
     *     // ... data to create a CustomRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomRequest we want to update
     *   }
     * })
     */
    upsert<T extends CustomRequestUpsertArgs>(args: SelectSubset<T, CustomRequestUpsertArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestCountArgs} args - Arguments to filter CustomRequests to count.
     * @example
     * // Count the number of CustomRequests
     * const count = await prisma.customRequest.count({
     *   where: {
     *     // ... the filter for the CustomRequests we want to count
     *   }
     * })
    **/
    count<T extends CustomRequestCountArgs>(
      args?: Subset<T, CustomRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomRequestAggregateArgs>(args: Subset<T, CustomRequestAggregateArgs>): Prisma.PrismaPromise<GetCustomRequestAggregateType<T>>

    /**
     * Group by CustomRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomRequestGroupByArgs['orderBy'] }
        : { orderBy?: CustomRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomRequest model
   */
  readonly fields: CustomRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bids<T extends CustomRequest$bidsArgs<ExtArgs> = {}>(args?: Subset<T, CustomRequest$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends CustomRequest$messagesArgs<ExtArgs> = {}>(args?: Subset<T, CustomRequest$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptedTailor<T extends CustomRequest$acceptedTailorArgs<ExtArgs> = {}>(args?: Subset<T, CustomRequest$acceptedTailorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends CustomRequest$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, CustomRequest$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomRequest model
   */
  interface CustomRequestFieldRefs {
    readonly id: FieldRef<"CustomRequest", 'String'>
    readonly customerId: FieldRef<"CustomRequest", 'String'>
    readonly title: FieldRef<"CustomRequest", 'String'>
    readonly description: FieldRef<"CustomRequest", 'String'>
    readonly proposedPrice: FieldRef<"CustomRequest", 'Int'>
    readonly status: FieldRef<"CustomRequest", 'String'>
    readonly created: FieldRef<"CustomRequest", 'DateTime'>
    readonly deadline: FieldRef<"CustomRequest", 'DateTime'>
    readonly imageUrl: FieldRef<"CustomRequest", 'String'>
    readonly acceptedTailorId: FieldRef<"CustomRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomRequest findUnique
   */
  export type CustomRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomRequest to fetch.
     */
    where: CustomRequestWhereUniqueInput
  }

  /**
   * CustomRequest findUniqueOrThrow
   */
  export type CustomRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomRequest to fetch.
     */
    where: CustomRequestWhereUniqueInput
  }

  /**
   * CustomRequest findFirst
   */
  export type CustomRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomRequest to fetch.
     */
    where?: CustomRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomRequests to fetch.
     */
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomRequests.
     */
    cursor?: CustomRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomRequests.
     */
    distinct?: CustomRequestScalarFieldEnum | CustomRequestScalarFieldEnum[]
  }

  /**
   * CustomRequest findFirstOrThrow
   */
  export type CustomRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomRequest to fetch.
     */
    where?: CustomRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomRequests to fetch.
     */
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomRequests.
     */
    cursor?: CustomRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomRequests.
     */
    distinct?: CustomRequestScalarFieldEnum | CustomRequestScalarFieldEnum[]
  }

  /**
   * CustomRequest findMany
   */
  export type CustomRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomRequests to fetch.
     */
    where?: CustomRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomRequests to fetch.
     */
    orderBy?: CustomRequestOrderByWithRelationInput | CustomRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomRequests.
     */
    cursor?: CustomRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomRequests.
     */
    skip?: number
    distinct?: CustomRequestScalarFieldEnum | CustomRequestScalarFieldEnum[]
  }

  /**
   * CustomRequest create
   */
  export type CustomRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomRequest.
     */
    data: XOR<CustomRequestCreateInput, CustomRequestUncheckedCreateInput>
  }

  /**
   * CustomRequest createMany
   */
  export type CustomRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomRequests.
     */
    data: CustomRequestCreateManyInput | CustomRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomRequest createManyAndReturn
   */
  export type CustomRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CustomRequests.
     */
    data: CustomRequestCreateManyInput | CustomRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomRequest update
   */
  export type CustomRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomRequest.
     */
    data: XOR<CustomRequestUpdateInput, CustomRequestUncheckedUpdateInput>
    /**
     * Choose, which CustomRequest to update.
     */
    where: CustomRequestWhereUniqueInput
  }

  /**
   * CustomRequest updateMany
   */
  export type CustomRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomRequests.
     */
    data: XOR<CustomRequestUpdateManyMutationInput, CustomRequestUncheckedUpdateManyInput>
    /**
     * Filter which CustomRequests to update
     */
    where?: CustomRequestWhereInput
    /**
     * Limit how many CustomRequests to update.
     */
    limit?: number
  }

  /**
   * CustomRequest updateManyAndReturn
   */
  export type CustomRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * The data used to update CustomRequests.
     */
    data: XOR<CustomRequestUpdateManyMutationInput, CustomRequestUncheckedUpdateManyInput>
    /**
     * Filter which CustomRequests to update
     */
    where?: CustomRequestWhereInput
    /**
     * Limit how many CustomRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomRequest upsert
   */
  export type CustomRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomRequest to update in case it exists.
     */
    where: CustomRequestWhereUniqueInput
    /**
     * In case the CustomRequest found by the `where` argument doesn't exist, create a new CustomRequest with this data.
     */
    create: XOR<CustomRequestCreateInput, CustomRequestUncheckedCreateInput>
    /**
     * In case the CustomRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomRequestUpdateInput, CustomRequestUncheckedUpdateInput>
  }

  /**
   * CustomRequest delete
   */
  export type CustomRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    /**
     * Filter which CustomRequest to delete.
     */
    where: CustomRequestWhereUniqueInput
  }

  /**
   * CustomRequest deleteMany
   */
  export type CustomRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomRequests to delete
     */
    where?: CustomRequestWhereInput
    /**
     * Limit how many CustomRequests to delete.
     */
    limit?: number
  }

  /**
   * CustomRequest.bids
   */
  export type CustomRequest$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * CustomRequest.messages
   */
  export type CustomRequest$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * CustomRequest.acceptedTailor
   */
  export type CustomRequest$acceptedTailorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CustomRequest.notifications
   */
  export type CustomRequest$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * CustomRequest without action
   */
  export type CustomRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    price: number | null
  }

  export type BidSumAggregateOutputType = {
    price: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    tailorId: string | null
    price: number | null
    message: string | null
    created: Date | null
    status: string | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    tailorId: string | null
    price: number | null
    message: string | null
    created: Date | null
    status: string | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    requestId: number
    tailorId: number
    price: number
    message: number
    created: number
    status: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    price?: true
  }

  export type BidSumAggregateInputType = {
    price?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    requestId?: true
    tailorId?: true
    price?: true
    message?: true
    created?: true
    status?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    requestId?: true
    tailorId?: true
    price?: true
    message?: true
    created?: true
    status?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    requestId?: true
    tailorId?: true
    price?: true
    message?: true
    created?: true
    status?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    requestId: string
    tailorId: string
    price: number
    message: string
    created: Date
    status: string
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    tailorId?: boolean
    price?: boolean
    message?: boolean
    created?: boolean
    status?: boolean
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    tailorId?: boolean
    price?: boolean
    message?: boolean
    created?: boolean
    status?: boolean
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    tailorId?: boolean
    price?: boolean
    message?: boolean
    created?: boolean
    status?: boolean
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    requestId?: boolean
    tailorId?: boolean
    price?: boolean
    message?: boolean
    created?: boolean
    status?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "tailorId" | "price" | "message" | "created" | "status", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomRequestDefaultArgs<ExtArgs>
    tailor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      request: Prisma.$CustomRequestPayload<ExtArgs>
      tailor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      tailorId: string
      price: number
      message: string
      created: Date
      status: string
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends CustomRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomRequestDefaultArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tailor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly requestId: FieldRef<"Bid", 'String'>
    readonly tailorId: FieldRef<"Bid", 'String'>
    readonly price: FieldRef<"Bid", 'Int'>
    readonly message: FieldRef<"Bid", 'String'>
    readonly created: FieldRef<"Bid", 'DateTime'>
    readonly status: FieldRef<"Bid", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    unreadCount: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    unreadCount: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    lastMessage: string | null
    lastMessageTime: Date | null
    unreadCount: number | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    lastMessage: string | null
    lastMessageTime: Date | null
    unreadCount: number | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    lastMessage: number
    lastMessageTime: number
    unreadCount: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    unreadCount?: true
  }

  export type ChatRoomSumAggregateInputType = {
    unreadCount?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    lastMessage?: true
    lastMessageTime?: true
    unreadCount?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    lastMessage?: true
    lastMessageTime?: true
    unreadCount?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    lastMessage?: true
    lastMessageTime?: true
    unreadCount?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    lastMessage: string | null
    lastMessageTime: Date | null
    unreadCount: number
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastMessage?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
    participants?: boolean | ChatRoom$participantsArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastMessage?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastMessage?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    lastMessage?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastMessage" | "lastMessageTime" | "unreadCount", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ChatRoom$participantsArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      participants: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastMessage: string | null
      lastMessageTime: Date | null
      unreadCount: number
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends ChatRoom$participantsArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly lastMessage: FieldRef<"ChatRoom", 'String'>
    readonly lastMessageTime: FieldRef<"ChatRoom", 'DateTime'>
    readonly unreadCount: FieldRef<"ChatRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.participants
   */
  export type ChatRoom$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    senderId: string | null
    recipientId: string | null
    content: string | null
    timestamp: Date | null
    read: boolean | null
    requestId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    senderId: string | null
    recipientId: string | null
    content: string | null
    timestamp: Date | null
    read: boolean | null
    requestId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    chatRoomId: number
    senderId: number
    recipientId: number
    content: number
    timestamp: number
    read: number
    requestId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    recipientId?: true
    content?: true
    timestamp?: true
    read?: true
    requestId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    recipientId?: true
    content?: true
    timestamp?: true
    read?: true
    requestId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    recipientId?: true
    content?: true
    timestamp?: true
    read?: true
    requestId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    chatRoomId: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date
    read: boolean
    requestId: string | null
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    recipientId?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    requestId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    recipientId?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    requestId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    recipientId?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    requestId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    recipientId?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    requestId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatRoomId" | "senderId" | "recipientId" | "content" | "timestamp" | "read" | "requestId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | ChatMessage$requestArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
      request: Prisma.$CustomRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatRoomId: string
      senderId: string
      recipientId: string
      content: string
      timestamp: Date
      read: boolean
      requestId: string | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends ChatMessage$requestArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$requestArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly chatRoomId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly recipientId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly timestamp: FieldRef<"ChatMessage", 'DateTime'>
    readonly read: FieldRef<"ChatMessage", 'Boolean'>
    readonly requestId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.request
   */
  export type ChatMessage$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    where?: CustomRequestWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    chest: number | null
    waist: number | null
    hip: number | null
    inseam: number | null
    shoulder: number | null
    arm: number | null
    height: number | null
    weight: number | null
    neck: number | null
    thigh: number | null
    calf: number | null
    bicep: number | null
    forearm: number | null
    wrist: number | null
    ankle: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    chest: number | null
    waist: number | null
    hip: number | null
    inseam: number | null
    shoulder: number | null
    arm: number | null
    height: number | null
    weight: number | null
    neck: number | null
    thigh: number | null
    calf: number | null
    bicep: number | null
    forearm: number | null
    wrist: number | null
    ankle: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    chest: number | null
    waist: number | null
    hip: number | null
    inseam: number | null
    shoulder: number | null
    arm: number | null
    height: number | null
    weight: number | null
    neck: number | null
    thigh: number | null
    calf: number | null
    bicep: number | null
    forearm: number | null
    wrist: number | null
    ankle: number | null
    aiProcessed: boolean | null
    created: Date | null
    updated: Date | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    chest: number | null
    waist: number | null
    hip: number | null
    inseam: number | null
    shoulder: number | null
    arm: number | null
    height: number | null
    weight: number | null
    neck: number | null
    thigh: number | null
    calf: number | null
    bicep: number | null
    forearm: number | null
    wrist: number | null
    ankle: number | null
    aiProcessed: boolean | null
    created: Date | null
    updated: Date | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    customerId: number
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh: number
    calf: number
    bicep: number
    forearm: number
    wrist: number
    ankle: number
    aiProcessed: number
    created: number
    updated: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    chest?: true
    waist?: true
    hip?: true
    inseam?: true
    shoulder?: true
    arm?: true
    height?: true
    weight?: true
    neck?: true
    thigh?: true
    calf?: true
    bicep?: true
    forearm?: true
    wrist?: true
    ankle?: true
  }

  export type MeasurementSumAggregateInputType = {
    chest?: true
    waist?: true
    hip?: true
    inseam?: true
    shoulder?: true
    arm?: true
    height?: true
    weight?: true
    neck?: true
    thigh?: true
    calf?: true
    bicep?: true
    forearm?: true
    wrist?: true
    ankle?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    customerId?: true
    chest?: true
    waist?: true
    hip?: true
    inseam?: true
    shoulder?: true
    arm?: true
    height?: true
    weight?: true
    neck?: true
    thigh?: true
    calf?: true
    bicep?: true
    forearm?: true
    wrist?: true
    ankle?: true
    aiProcessed?: true
    created?: true
    updated?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    customerId?: true
    chest?: true
    waist?: true
    hip?: true
    inseam?: true
    shoulder?: true
    arm?: true
    height?: true
    weight?: true
    neck?: true
    thigh?: true
    calf?: true
    bicep?: true
    forearm?: true
    wrist?: true
    ankle?: true
    aiProcessed?: true
    created?: true
    updated?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    customerId?: true
    chest?: true
    waist?: true
    hip?: true
    inseam?: true
    shoulder?: true
    arm?: true
    height?: true
    weight?: true
    neck?: true
    thigh?: true
    calf?: true
    bicep?: true
    forearm?: true
    wrist?: true
    ankle?: true
    aiProcessed?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurement to aggregate.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type MeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithAggregationInput | MeasurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: MeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: string
    customerId: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh: number | null
    calf: number | null
    bicep: number | null
    forearm: number | null
    wrist: number | null
    ankle: number | null
    aiProcessed: boolean
    created: Date
    updated: Date
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends MeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    chest?: boolean
    waist?: boolean
    hip?: boolean
    inseam?: boolean
    shoulder?: boolean
    arm?: boolean
    height?: boolean
    weight?: boolean
    neck?: boolean
    thigh?: boolean
    calf?: boolean
    bicep?: boolean
    forearm?: boolean
    wrist?: boolean
    ankle?: boolean
    aiProcessed?: boolean
    created?: boolean
    updated?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    chest?: boolean
    waist?: boolean
    hip?: boolean
    inseam?: boolean
    shoulder?: boolean
    arm?: boolean
    height?: boolean
    weight?: boolean
    neck?: boolean
    thigh?: boolean
    calf?: boolean
    bicep?: boolean
    forearm?: boolean
    wrist?: boolean
    ankle?: boolean
    aiProcessed?: boolean
    created?: boolean
    updated?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    chest?: boolean
    waist?: boolean
    hip?: boolean
    inseam?: boolean
    shoulder?: boolean
    arm?: boolean
    height?: boolean
    weight?: boolean
    neck?: boolean
    thigh?: boolean
    calf?: boolean
    bicep?: boolean
    forearm?: boolean
    wrist?: boolean
    ankle?: boolean
    aiProcessed?: boolean
    created?: boolean
    updated?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectScalar = {
    id?: boolean
    customerId?: boolean
    chest?: boolean
    waist?: boolean
    hip?: boolean
    inseam?: boolean
    shoulder?: boolean
    arm?: boolean
    height?: boolean
    weight?: boolean
    neck?: boolean
    thigh?: boolean
    calf?: boolean
    bicep?: boolean
    forearm?: boolean
    wrist?: boolean
    ankle?: boolean
    aiProcessed?: boolean
    created?: boolean
    updated?: boolean
  }

  export type MeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "chest" | "waist" | "hip" | "inseam" | "shoulder" | "arm" | "height" | "weight" | "neck" | "thigh" | "calf" | "bicep" | "forearm" | "wrist" | "ankle" | "aiProcessed" | "created" | "updated", ExtArgs["result"]["measurement"]>
  export type MeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurement"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      chest: number
      waist: number
      hip: number
      inseam: number
      shoulder: number
      arm: number
      height: number
      weight: number
      neck: number
      thigh: number | null
      calf: number | null
      bicep: number | null
      forearm: number | null
      wrist: number | null
      ankle: number | null
      aiProcessed: boolean
      created: Date
      updated: Date
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type MeasurementGetPayload<S extends boolean | null | undefined | MeasurementDefaultArgs> = $Result.GetResult<Prisma.$MeasurementPayload, S>

  type MeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface MeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurement'], meta: { name: 'Measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {MeasurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementFindUniqueArgs>(args: SelectSubset<T, MeasurementFindUniqueArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementFindFirstArgs>(args?: SelectSubset<T, MeasurementFindFirstArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementFindManyArgs>(args?: SelectSubset<T, MeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurement.
     * @param {MeasurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends MeasurementCreateArgs>(args: SelectSubset<T, MeasurementCreateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {MeasurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementCreateManyArgs>(args?: SelectSubset<T, MeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {MeasurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurement.
     * @param {MeasurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends MeasurementDeleteArgs>(args: SelectSubset<T, MeasurementDeleteArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurement.
     * @param {MeasurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementUpdateArgs>(args: SelectSubset<T, MeasurementUpdateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementDeleteManyArgs>(args?: SelectSubset<T, MeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementUpdateManyArgs>(args: SelectSubset<T, MeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {MeasurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurement.
     * @param {MeasurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementUpsertArgs>(args: SelectSubset<T, MeasurementUpsertArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementCountArgs>(
      args?: Subset<T, MeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurement model
   */
  readonly fields: MeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Measurement model
   */
  interface MeasurementFieldRefs {
    readonly id: FieldRef<"Measurement", 'String'>
    readonly customerId: FieldRef<"Measurement", 'String'>
    readonly chest: FieldRef<"Measurement", 'Float'>
    readonly waist: FieldRef<"Measurement", 'Float'>
    readonly hip: FieldRef<"Measurement", 'Float'>
    readonly inseam: FieldRef<"Measurement", 'Float'>
    readonly shoulder: FieldRef<"Measurement", 'Float'>
    readonly arm: FieldRef<"Measurement", 'Float'>
    readonly height: FieldRef<"Measurement", 'Float'>
    readonly weight: FieldRef<"Measurement", 'Float'>
    readonly neck: FieldRef<"Measurement", 'Float'>
    readonly thigh: FieldRef<"Measurement", 'Float'>
    readonly calf: FieldRef<"Measurement", 'Float'>
    readonly bicep: FieldRef<"Measurement", 'Float'>
    readonly forearm: FieldRef<"Measurement", 'Float'>
    readonly wrist: FieldRef<"Measurement", 'Float'>
    readonly ankle: FieldRef<"Measurement", 'Float'>
    readonly aiProcessed: FieldRef<"Measurement", 'Boolean'>
    readonly created: FieldRef<"Measurement", 'DateTime'>
    readonly updated: FieldRef<"Measurement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Measurement findUnique
   */
  export type MeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findUniqueOrThrow
   */
  export type MeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findFirst
   */
  export type MeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findFirstOrThrow
   */
  export type MeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findMany
   */
  export type MeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement create
   */
  export type MeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurement.
     */
    data: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
  }

  /**
   * Measurement createMany
   */
  export type MeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measurement createManyAndReturn
   */
  export type MeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement update
   */
  export type MeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurement.
     */
    data: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
    /**
     * Choose, which Measurement to update.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement updateMany
   */
  export type MeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
  }

  /**
   * Measurement updateManyAndReturn
   */
  export type MeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement upsert
   */
  export type MeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurement to update in case it exists.
     */
    where: MeasurementWhereUniqueInput
    /**
     * In case the Measurement found by the `where` argument doesn't exist, create a new Measurement with this data.
     */
    create: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
    /**
     * In case the Measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
  }

  /**
   * Measurement delete
   */
  export type MeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter which Measurement to delete.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement deleteMany
   */
  export type MeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to delete.
     */
    limit?: number
  }

  /**
   * Measurement without action
   */
  export type MeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
  }


  /**
   * Model ChatChannel
   */

  export type AggregateChatChannel = {
    _count: ChatChannelCountAggregateOutputType | null
    _min: ChatChannelMinAggregateOutputType | null
    _max: ChatChannelMaxAggregateOutputType | null
  }

  export type ChatChannelMinAggregateOutputType = {
    id: string | null
    streamId: string | null
    designId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatChannelMaxAggregateOutputType = {
    id: string | null
    streamId: string | null
    designId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatChannelCountAggregateOutputType = {
    id: number
    streamId: number
    designId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatChannelMinAggregateInputType = {
    id?: true
    streamId?: true
    designId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatChannelMaxAggregateInputType = {
    id?: true
    streamId?: true
    designId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatChannelCountAggregateInputType = {
    id?: true
    streamId?: true
    designId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatChannel to aggregate.
     */
    where?: ChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatChannels to fetch.
     */
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatChannels
    **/
    _count?: true | ChatChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatChannelMaxAggregateInputType
  }

  export type GetChatChannelAggregateType<T extends ChatChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChatChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatChannel[P]>
      : GetScalarType<T[P], AggregateChatChannel[P]>
  }




  export type ChatChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatChannelWhereInput
    orderBy?: ChatChannelOrderByWithAggregationInput | ChatChannelOrderByWithAggregationInput[]
    by: ChatChannelScalarFieldEnum[] | ChatChannelScalarFieldEnum
    having?: ChatChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatChannelCountAggregateInputType | true
    _min?: ChatChannelMinAggregateInputType
    _max?: ChatChannelMaxAggregateInputType
  }

  export type ChatChannelGroupByOutputType = {
    id: string
    streamId: string
    designId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChatChannelCountAggregateOutputType | null
    _min: ChatChannelMinAggregateOutputType | null
    _max: ChatChannelMaxAggregateOutputType | null
  }

  type GetChatChannelGroupByPayload<T extends ChatChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChatChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChatChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    designId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | ChatChannel$participantsArgs<ExtArgs>
    design?: boolean | ChatChannel$designArgs<ExtArgs>
    _count?: boolean | ChatChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatChannel"]>

  export type ChatChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    designId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | ChatChannel$designArgs<ExtArgs>
  }, ExtArgs["result"]["chatChannel"]>

  export type ChatChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    designId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | ChatChannel$designArgs<ExtArgs>
  }, ExtArgs["result"]["chatChannel"]>

  export type ChatChannelSelectScalar = {
    id?: boolean
    streamId?: boolean
    designId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streamId" | "designId" | "createdAt" | "updatedAt", ExtArgs["result"]["chatChannel"]>
  export type ChatChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ChatChannel$participantsArgs<ExtArgs>
    design?: boolean | ChatChannel$designArgs<ExtArgs>
    _count?: boolean | ChatChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | ChatChannel$designArgs<ExtArgs>
  }
  export type ChatChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | ChatChannel$designArgs<ExtArgs>
  }

  export type $ChatChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatChannel"
    objects: {
      participants: Prisma.$UserPayload<ExtArgs>[]
      design: Prisma.$DesignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      streamId: string
      designId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatChannel"]>
    composites: {}
  }

  type ChatChannelGetPayload<S extends boolean | null | undefined | ChatChannelDefaultArgs> = $Result.GetResult<Prisma.$ChatChannelPayload, S>

  type ChatChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatChannelCountAggregateInputType | true
    }

  export interface ChatChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatChannel'], meta: { name: 'ChatChannel' } }
    /**
     * Find zero or one ChatChannel that matches the filter.
     * @param {ChatChannelFindUniqueArgs} args - Arguments to find a ChatChannel
     * @example
     * // Get one ChatChannel
     * const chatChannel = await prisma.chatChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatChannelFindUniqueArgs>(args: SelectSubset<T, ChatChannelFindUniqueArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatChannelFindUniqueOrThrowArgs} args - Arguments to find a ChatChannel
     * @example
     * // Get one ChatChannel
     * const chatChannel = await prisma.chatChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelFindFirstArgs} args - Arguments to find a ChatChannel
     * @example
     * // Get one ChatChannel
     * const chatChannel = await prisma.chatChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatChannelFindFirstArgs>(args?: SelectSubset<T, ChatChannelFindFirstArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelFindFirstOrThrowArgs} args - Arguments to find a ChatChannel
     * @example
     * // Get one ChatChannel
     * const chatChannel = await prisma.chatChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatChannels
     * const chatChannels = await prisma.chatChannel.findMany()
     * 
     * // Get first 10 ChatChannels
     * const chatChannels = await prisma.chatChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatChannelWithIdOnly = await prisma.chatChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatChannelFindManyArgs>(args?: SelectSubset<T, ChatChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatChannel.
     * @param {ChatChannelCreateArgs} args - Arguments to create a ChatChannel.
     * @example
     * // Create one ChatChannel
     * const ChatChannel = await prisma.chatChannel.create({
     *   data: {
     *     // ... data to create a ChatChannel
     *   }
     * })
     * 
     */
    create<T extends ChatChannelCreateArgs>(args: SelectSubset<T, ChatChannelCreateArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatChannels.
     * @param {ChatChannelCreateManyArgs} args - Arguments to create many ChatChannels.
     * @example
     * // Create many ChatChannels
     * const chatChannel = await prisma.chatChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatChannelCreateManyArgs>(args?: SelectSubset<T, ChatChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatChannels and returns the data saved in the database.
     * @param {ChatChannelCreateManyAndReturnArgs} args - Arguments to create many ChatChannels.
     * @example
     * // Create many ChatChannels
     * const chatChannel = await prisma.chatChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatChannels and only return the `id`
     * const chatChannelWithIdOnly = await prisma.chatChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatChannel.
     * @param {ChatChannelDeleteArgs} args - Arguments to delete one ChatChannel.
     * @example
     * // Delete one ChatChannel
     * const ChatChannel = await prisma.chatChannel.delete({
     *   where: {
     *     // ... filter to delete one ChatChannel
     *   }
     * })
     * 
     */
    delete<T extends ChatChannelDeleteArgs>(args: SelectSubset<T, ChatChannelDeleteArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatChannel.
     * @param {ChatChannelUpdateArgs} args - Arguments to update one ChatChannel.
     * @example
     * // Update one ChatChannel
     * const chatChannel = await prisma.chatChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatChannelUpdateArgs>(args: SelectSubset<T, ChatChannelUpdateArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatChannels.
     * @param {ChatChannelDeleteManyArgs} args - Arguments to filter ChatChannels to delete.
     * @example
     * // Delete a few ChatChannels
     * const { count } = await prisma.chatChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatChannelDeleteManyArgs>(args?: SelectSubset<T, ChatChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatChannels
     * const chatChannel = await prisma.chatChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatChannelUpdateManyArgs>(args: SelectSubset<T, ChatChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatChannels and returns the data updated in the database.
     * @param {ChatChannelUpdateManyAndReturnArgs} args - Arguments to update many ChatChannels.
     * @example
     * // Update many ChatChannels
     * const chatChannel = await prisma.chatChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatChannels and only return the `id`
     * const chatChannelWithIdOnly = await prisma.chatChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatChannel.
     * @param {ChatChannelUpsertArgs} args - Arguments to update or create a ChatChannel.
     * @example
     * // Update or create a ChatChannel
     * const chatChannel = await prisma.chatChannel.upsert({
     *   create: {
     *     // ... data to create a ChatChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatChannel we want to update
     *   }
     * })
     */
    upsert<T extends ChatChannelUpsertArgs>(args: SelectSubset<T, ChatChannelUpsertArgs<ExtArgs>>): Prisma__ChatChannelClient<$Result.GetResult<Prisma.$ChatChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelCountArgs} args - Arguments to filter ChatChannels to count.
     * @example
     * // Count the number of ChatChannels
     * const count = await prisma.chatChannel.count({
     *   where: {
     *     // ... the filter for the ChatChannels we want to count
     *   }
     * })
    **/
    count<T extends ChatChannelCountArgs>(
      args?: Subset<T, ChatChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatChannelAggregateArgs>(args: Subset<T, ChatChannelAggregateArgs>): Prisma.PrismaPromise<GetChatChannelAggregateType<T>>

    /**
     * Group by ChatChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChatChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatChannel model
   */
  readonly fields: ChatChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends ChatChannel$participantsArgs<ExtArgs> = {}>(args?: Subset<T, ChatChannel$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    design<T extends ChatChannel$designArgs<ExtArgs> = {}>(args?: Subset<T, ChatChannel$designArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatChannel model
   */
  interface ChatChannelFieldRefs {
    readonly id: FieldRef<"ChatChannel", 'String'>
    readonly streamId: FieldRef<"ChatChannel", 'String'>
    readonly designId: FieldRef<"ChatChannel", 'String'>
    readonly createdAt: FieldRef<"ChatChannel", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatChannel findUnique
   */
  export type ChatChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter, which ChatChannel to fetch.
     */
    where: ChatChannelWhereUniqueInput
  }

  /**
   * ChatChannel findUniqueOrThrow
   */
  export type ChatChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter, which ChatChannel to fetch.
     */
    where: ChatChannelWhereUniqueInput
  }

  /**
   * ChatChannel findFirst
   */
  export type ChatChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter, which ChatChannel to fetch.
     */
    where?: ChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatChannels to fetch.
     */
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatChannels.
     */
    cursor?: ChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatChannels.
     */
    distinct?: ChatChannelScalarFieldEnum | ChatChannelScalarFieldEnum[]
  }

  /**
   * ChatChannel findFirstOrThrow
   */
  export type ChatChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter, which ChatChannel to fetch.
     */
    where?: ChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatChannels to fetch.
     */
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatChannels.
     */
    cursor?: ChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatChannels.
     */
    distinct?: ChatChannelScalarFieldEnum | ChatChannelScalarFieldEnum[]
  }

  /**
   * ChatChannel findMany
   */
  export type ChatChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter, which ChatChannels to fetch.
     */
    where?: ChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatChannels to fetch.
     */
    orderBy?: ChatChannelOrderByWithRelationInput | ChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatChannels.
     */
    cursor?: ChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatChannels.
     */
    skip?: number
    distinct?: ChatChannelScalarFieldEnum | ChatChannelScalarFieldEnum[]
  }

  /**
   * ChatChannel create
   */
  export type ChatChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatChannel.
     */
    data: XOR<ChatChannelCreateInput, ChatChannelUncheckedCreateInput>
  }

  /**
   * ChatChannel createMany
   */
  export type ChatChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatChannels.
     */
    data: ChatChannelCreateManyInput | ChatChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatChannel createManyAndReturn
   */
  export type ChatChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * The data used to create many ChatChannels.
     */
    data: ChatChannelCreateManyInput | ChatChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatChannel update
   */
  export type ChatChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatChannel.
     */
    data: XOR<ChatChannelUpdateInput, ChatChannelUncheckedUpdateInput>
    /**
     * Choose, which ChatChannel to update.
     */
    where: ChatChannelWhereUniqueInput
  }

  /**
   * ChatChannel updateMany
   */
  export type ChatChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatChannels.
     */
    data: XOR<ChatChannelUpdateManyMutationInput, ChatChannelUncheckedUpdateManyInput>
    /**
     * Filter which ChatChannels to update
     */
    where?: ChatChannelWhereInput
    /**
     * Limit how many ChatChannels to update.
     */
    limit?: number
  }

  /**
   * ChatChannel updateManyAndReturn
   */
  export type ChatChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * The data used to update ChatChannels.
     */
    data: XOR<ChatChannelUpdateManyMutationInput, ChatChannelUncheckedUpdateManyInput>
    /**
     * Filter which ChatChannels to update
     */
    where?: ChatChannelWhereInput
    /**
     * Limit how many ChatChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatChannel upsert
   */
  export type ChatChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatChannel to update in case it exists.
     */
    where: ChatChannelWhereUniqueInput
    /**
     * In case the ChatChannel found by the `where` argument doesn't exist, create a new ChatChannel with this data.
     */
    create: XOR<ChatChannelCreateInput, ChatChannelUncheckedCreateInput>
    /**
     * In case the ChatChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatChannelUpdateInput, ChatChannelUncheckedUpdateInput>
  }

  /**
   * ChatChannel delete
   */
  export type ChatChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
    /**
     * Filter which ChatChannel to delete.
     */
    where: ChatChannelWhereUniqueInput
  }

  /**
   * ChatChannel deleteMany
   */
  export type ChatChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatChannels to delete
     */
    where?: ChatChannelWhereInput
    /**
     * Limit how many ChatChannels to delete.
     */
    limit?: number
  }

  /**
   * ChatChannel.participants
   */
  export type ChatChannel$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ChatChannel.design
   */
  export type ChatChannel$designArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    where?: DesignWhereInput
  }

  /**
   * ChatChannel without action
   */
  export type ChatChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatChannel
     */
    select?: ChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatChannel
     */
    omit?: ChatChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatChannelInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    requestId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    requestId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    read: number
    createdAt: number
    requestId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    read?: true
    createdAt?: true
    requestId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    read?: true
    createdAt?: true
    requestId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    read?: true
    createdAt?: true
    requestId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    message: string
    read: boolean
    createdAt: Date
    requestId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    requestId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    requestId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    requestId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    requestId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "read" | "createdAt" | "requestId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Notification$requestArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      request: Prisma.$CustomRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      read: boolean
      createdAt: Date
      requestId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends Notification$requestArgs<ExtArgs> = {}>(args?: Subset<T, Notification$requestArgs<ExtArgs>>): Prisma__CustomRequestClient<$Result.GetResult<Prisma.$CustomRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly requestId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.request
   */
  export type Notification$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomRequest
     */
    select?: CustomRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomRequest
     */
    omit?: CustomRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomRequestInclude<ExtArgs> | null
    where?: CustomRequestWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    status: number | null
  }

  export type LogSumAggregateOutputType = {
    status: number | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    method: string | null
    route: string | null
    status: number | null
    requestBody: string | null
    responseBody: string | null
    error: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    method: string | null
    route: string | null
    status: number | null
    requestBody: string | null
    responseBody: string | null
    error: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    timestamp: number
    userId: number
    method: number
    route: number
    status: number
    requestBody: number
    responseBody: number
    error: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    status?: true
  }

  export type LogSumAggregateInputType = {
    status?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    method?: true
    route?: true
    status?: true
    requestBody?: true
    responseBody?: true
    error?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    method?: true
    route?: true
    status?: true
    requestBody?: true
    responseBody?: true
    error?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    method?: true
    route?: true
    status?: true
    requestBody?: true
    responseBody?: true
    error?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    timestamp: Date
    userId: string | null
    method: string
    route: string
    status: number
    requestBody: string | null
    responseBody: string | null
    error: string | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    method?: boolean
    route?: boolean
    status?: boolean
    requestBody?: boolean
    responseBody?: boolean
    error?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    method?: boolean
    route?: boolean
    status?: boolean
    requestBody?: boolean
    responseBody?: boolean
    error?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    method?: boolean
    route?: boolean
    status?: boolean
    requestBody?: boolean
    responseBody?: boolean
    error?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    method?: boolean
    route?: boolean
    status?: boolean
    requestBody?: boolean
    responseBody?: boolean
    error?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "userId" | "method" | "route" | "status" | "requestBody" | "responseBody" | "error", ExtArgs["result"]["log"]>

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      userId: string | null
      method: string
      route: string
      status: number
      requestBody: string | null
      responseBody: string | null
      error: string | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly userId: FieldRef<"Log", 'String'>
    readonly method: FieldRef<"Log", 'String'>
    readonly route: FieldRef<"Log", 'String'>
    readonly status: FieldRef<"Log", 'Int'>
    readonly requestBody: FieldRef<"Log", 'String'>
    readonly responseBody: FieldRef<"Log", 'String'>
    readonly error: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    key: $Enums.DesignCategory | null
    label: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    key: $Enums.DesignCategory | null
    label: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    key: number
    label: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    key: $Enums.DesignCategory
    label: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: $Enums.DesignCategory
      label: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly key: FieldRef<"Category", 'DesignCategory'>
    readonly label: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    location: 'location',
    streamId: 'streamId',
    emailVerified: 'emailVerified',
    verificationToken: 'verificationToken',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DesignScalarFieldEnum: {
    id: 'id',
    tailorId: 'tailorId',
    title: 'title',
    description: 'description',
    price: 'price',
    imageUrls: 'imageUrls',
    category: 'category',
    fabricType: 'fabricType',
    created: 'created',
    availableSizes: 'availableSizes',
    tags: 'tags'
  };

  export type DesignScalarFieldEnum = (typeof DesignScalarFieldEnum)[keyof typeof DesignScalarFieldEnum]


  export const CustomRequestScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    title: 'title',
    description: 'description',
    proposedPrice: 'proposedPrice',
    status: 'status',
    created: 'created',
    deadline: 'deadline',
    imageUrl: 'imageUrl',
    acceptedTailorId: 'acceptedTailorId'
  };

  export type CustomRequestScalarFieldEnum = (typeof CustomRequestScalarFieldEnum)[keyof typeof CustomRequestScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    tailorId: 'tailorId',
    price: 'price',
    message: 'message',
    created: 'created',
    status: 'status'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    lastMessage: 'lastMessage',
    lastMessageTime: 'lastMessageTime',
    unreadCount: 'unreadCount'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    chatRoomId: 'chatRoomId',
    senderId: 'senderId',
    recipientId: 'recipientId',
    content: 'content',
    timestamp: 'timestamp',
    read: 'read',
    requestId: 'requestId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    chest: 'chest',
    waist: 'waist',
    hip: 'hip',
    inseam: 'inseam',
    shoulder: 'shoulder',
    arm: 'arm',
    height: 'height',
    weight: 'weight',
    neck: 'neck',
    thigh: 'thigh',
    calf: 'calf',
    bicep: 'bicep',
    forearm: 'forearm',
    wrist: 'wrist',
    ankle: 'ankle',
    aiProcessed: 'aiProcessed',
    created: 'created',
    updated: 'updated'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const ChatChannelScalarFieldEnum: {
    id: 'id',
    streamId: 'streamId',
    designId: 'designId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatChannelScalarFieldEnum = (typeof ChatChannelScalarFieldEnum)[keyof typeof ChatChannelScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt',
    requestId: 'requestId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    userId: 'userId',
    method: 'method',
    route: 'route',
    status: 'status',
    requestBody: 'requestBody',
    responseBody: 'responseBody',
    error: 'error'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DesignCategory'
   */
  export type EnumDesignCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignCategory'>
    


  /**
   * Reference to a field of type 'DesignCategory[]'
   */
  export type ListEnumDesignCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    streamId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    designs?: DesignListRelationFilter
    customRequests?: CustomRequestListRelationFilter
    bids?: BidListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
    measurements?: MeasurementListRelationFilter
    chatChannels?: ChatChannelListRelationFilter
    acceptedRequests?: CustomRequestListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    streamId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    designs?: DesignOrderByRelationAggregateInput
    customRequests?: CustomRequestOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    chatRooms?: ChatRoomOrderByRelationAggregateInput
    sentMessages?: ChatMessageOrderByRelationAggregateInput
    receivedMessages?: ChatMessageOrderByRelationAggregateInput
    measurements?: MeasurementOrderByRelationAggregateInput
    chatChannels?: ChatChannelOrderByRelationAggregateInput
    acceptedRequests?: CustomRequestOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    verificationToken?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    streamId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    designs?: DesignListRelationFilter
    customRequests?: CustomRequestListRelationFilter
    bids?: BidListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
    measurements?: MeasurementListRelationFilter
    chatChannels?: ChatChannelListRelationFilter
    acceptedRequests?: CustomRequestListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "verificationToken" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    streamId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    streamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DesignWhereInput = {
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    id?: StringFilter<"Design"> | string
    tailorId?: StringFilter<"Design"> | string
    title?: StringFilter<"Design"> | string
    description?: StringFilter<"Design"> | string
    price?: IntFilter<"Design"> | number
    imageUrls?: StringNullableListFilter<"Design">
    category?: EnumDesignCategoryFilter<"Design"> | $Enums.DesignCategory
    fabricType?: StringFilter<"Design"> | string
    created?: DateTimeFilter<"Design"> | Date | string
    availableSizes?: StringNullableListFilter<"Design">
    tags?: StringNullableListFilter<"Design">
    tailor?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatChannels?: ChatChannelListRelationFilter
  }

  export type DesignOrderByWithRelationInput = {
    id?: SortOrder
    tailorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrls?: SortOrder
    category?: SortOrder
    fabricType?: SortOrder
    created?: SortOrder
    availableSizes?: SortOrder
    tags?: SortOrder
    tailor?: UserOrderByWithRelationInput
    chatChannels?: ChatChannelOrderByRelationAggregateInput
  }

  export type DesignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    tailorId?: StringFilter<"Design"> | string
    title?: StringFilter<"Design"> | string
    description?: StringFilter<"Design"> | string
    price?: IntFilter<"Design"> | number
    imageUrls?: StringNullableListFilter<"Design">
    category?: EnumDesignCategoryFilter<"Design"> | $Enums.DesignCategory
    fabricType?: StringFilter<"Design"> | string
    created?: DateTimeFilter<"Design"> | Date | string
    availableSizes?: StringNullableListFilter<"Design">
    tags?: StringNullableListFilter<"Design">
    tailor?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatChannels?: ChatChannelListRelationFilter
  }, "id">

  export type DesignOrderByWithAggregationInput = {
    id?: SortOrder
    tailorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrls?: SortOrder
    category?: SortOrder
    fabricType?: SortOrder
    created?: SortOrder
    availableSizes?: SortOrder
    tags?: SortOrder
    _count?: DesignCountOrderByAggregateInput
    _avg?: DesignAvgOrderByAggregateInput
    _max?: DesignMaxOrderByAggregateInput
    _min?: DesignMinOrderByAggregateInput
    _sum?: DesignSumOrderByAggregateInput
  }

  export type DesignScalarWhereWithAggregatesInput = {
    AND?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    OR?: DesignScalarWhereWithAggregatesInput[]
    NOT?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Design"> | string
    tailorId?: StringWithAggregatesFilter<"Design"> | string
    title?: StringWithAggregatesFilter<"Design"> | string
    description?: StringWithAggregatesFilter<"Design"> | string
    price?: IntWithAggregatesFilter<"Design"> | number
    imageUrls?: StringNullableListFilter<"Design">
    category?: EnumDesignCategoryWithAggregatesFilter<"Design"> | $Enums.DesignCategory
    fabricType?: StringWithAggregatesFilter<"Design"> | string
    created?: DateTimeWithAggregatesFilter<"Design"> | Date | string
    availableSizes?: StringNullableListFilter<"Design">
    tags?: StringNullableListFilter<"Design">
  }

  export type CustomRequestWhereInput = {
    AND?: CustomRequestWhereInput | CustomRequestWhereInput[]
    OR?: CustomRequestWhereInput[]
    NOT?: CustomRequestWhereInput | CustomRequestWhereInput[]
    id?: StringFilter<"CustomRequest"> | string
    customerId?: StringFilter<"CustomRequest"> | string
    title?: StringFilter<"CustomRequest"> | string
    description?: StringFilter<"CustomRequest"> | string
    proposedPrice?: IntFilter<"CustomRequest"> | number
    status?: StringFilter<"CustomRequest"> | string
    created?: DateTimeFilter<"CustomRequest"> | Date | string
    deadline?: DateTimeNullableFilter<"CustomRequest"> | Date | string | null
    imageUrl?: StringNullableFilter<"CustomRequest"> | string | null
    acceptedTailorId?: StringNullableFilter<"CustomRequest"> | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    bids?: BidListRelationFilter
    messages?: ChatMessageListRelationFilter
    acceptedTailor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type CustomRequestOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    proposedPrice?: SortOrder
    status?: SortOrder
    created?: SortOrder
    deadline?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    acceptedTailorId?: SortOrderInput | SortOrder
    customer?: UserOrderByWithRelationInput
    bids?: BidOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
    acceptedTailor?: UserOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type CustomRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomRequestWhereInput | CustomRequestWhereInput[]
    OR?: CustomRequestWhereInput[]
    NOT?: CustomRequestWhereInput | CustomRequestWhereInput[]
    customerId?: StringFilter<"CustomRequest"> | string
    title?: StringFilter<"CustomRequest"> | string
    description?: StringFilter<"CustomRequest"> | string
    proposedPrice?: IntFilter<"CustomRequest"> | number
    status?: StringFilter<"CustomRequest"> | string
    created?: DateTimeFilter<"CustomRequest"> | Date | string
    deadline?: DateTimeNullableFilter<"CustomRequest"> | Date | string | null
    imageUrl?: StringNullableFilter<"CustomRequest"> | string | null
    acceptedTailorId?: StringNullableFilter<"CustomRequest"> | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    bids?: BidListRelationFilter
    messages?: ChatMessageListRelationFilter
    acceptedTailor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id">

  export type CustomRequestOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    proposedPrice?: SortOrder
    status?: SortOrder
    created?: SortOrder
    deadline?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    acceptedTailorId?: SortOrderInput | SortOrder
    _count?: CustomRequestCountOrderByAggregateInput
    _avg?: CustomRequestAvgOrderByAggregateInput
    _max?: CustomRequestMaxOrderByAggregateInput
    _min?: CustomRequestMinOrderByAggregateInput
    _sum?: CustomRequestSumOrderByAggregateInput
  }

  export type CustomRequestScalarWhereWithAggregatesInput = {
    AND?: CustomRequestScalarWhereWithAggregatesInput | CustomRequestScalarWhereWithAggregatesInput[]
    OR?: CustomRequestScalarWhereWithAggregatesInput[]
    NOT?: CustomRequestScalarWhereWithAggregatesInput | CustomRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomRequest"> | string
    customerId?: StringWithAggregatesFilter<"CustomRequest"> | string
    title?: StringWithAggregatesFilter<"CustomRequest"> | string
    description?: StringWithAggregatesFilter<"CustomRequest"> | string
    proposedPrice?: IntWithAggregatesFilter<"CustomRequest"> | number
    status?: StringWithAggregatesFilter<"CustomRequest"> | string
    created?: DateTimeWithAggregatesFilter<"CustomRequest"> | Date | string
    deadline?: DateTimeNullableWithAggregatesFilter<"CustomRequest"> | Date | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"CustomRequest"> | string | null
    acceptedTailorId?: StringNullableWithAggregatesFilter<"CustomRequest"> | string | null
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    requestId?: StringFilter<"Bid"> | string
    tailorId?: StringFilter<"Bid"> | string
    price?: IntFilter<"Bid"> | number
    message?: StringFilter<"Bid"> | string
    created?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
    request?: XOR<CustomRequestScalarRelationFilter, CustomRequestWhereInput>
    tailor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    tailorId?: SortOrder
    price?: SortOrder
    message?: SortOrder
    created?: SortOrder
    status?: SortOrder
    request?: CustomRequestOrderByWithRelationInput
    tailor?: UserOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    requestId?: StringFilter<"Bid"> | string
    tailorId?: StringFilter<"Bid"> | string
    price?: IntFilter<"Bid"> | number
    message?: StringFilter<"Bid"> | string
    created?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
    request?: XOR<CustomRequestScalarRelationFilter, CustomRequestWhereInput>
    tailor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    tailorId?: SortOrder
    price?: SortOrder
    message?: SortOrder
    created?: SortOrder
    status?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    requestId?: StringWithAggregatesFilter<"Bid"> | string
    tailorId?: StringWithAggregatesFilter<"Bid"> | string
    price?: IntWithAggregatesFilter<"Bid"> | number
    message?: StringWithAggregatesFilter<"Bid"> | string
    created?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
    status?: StringWithAggregatesFilter<"Bid"> | string
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    lastMessage?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    unreadCount?: IntFilter<"ChatRoom"> | number
    participants?: UserListRelationFilter
    messages?: ChatMessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    lastMessageTime?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    participants?: UserOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    lastMessage?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    unreadCount?: IntFilter<"ChatRoom"> | number
    participants?: UserListRelationFilter
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    lastMessageTime?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    lastMessage?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    lastMessageTime?: DateTimeNullableWithAggregatesFilter<"ChatRoom"> | Date | string | null
    unreadCount?: IntWithAggregatesFilter<"ChatRoom"> | number
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    recipientId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    read?: BoolFilter<"ChatMessage"> | boolean
    requestId?: StringNullableFilter<"ChatMessage"> | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<CustomRequestNullableScalarRelationFilter, CustomRequestWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    requestId?: SortOrderInput | SortOrder
    chatRoom?: ChatRoomOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    request?: CustomRequestOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    recipientId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    read?: BoolFilter<"ChatMessage"> | boolean
    requestId?: StringNullableFilter<"ChatMessage"> | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<CustomRequestNullableScalarRelationFilter, CustomRequestWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    requestId?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatRoomId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    recipientId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    read?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    requestId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
  }

  export type MeasurementWhereInput = {
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    id?: StringFilter<"Measurement"> | string
    customerId?: StringFilter<"Measurement"> | string
    chest?: FloatFilter<"Measurement"> | number
    waist?: FloatFilter<"Measurement"> | number
    hip?: FloatFilter<"Measurement"> | number
    inseam?: FloatFilter<"Measurement"> | number
    shoulder?: FloatFilter<"Measurement"> | number
    arm?: FloatFilter<"Measurement"> | number
    height?: FloatFilter<"Measurement"> | number
    weight?: FloatFilter<"Measurement"> | number
    neck?: FloatFilter<"Measurement"> | number
    thigh?: FloatNullableFilter<"Measurement"> | number | null
    calf?: FloatNullableFilter<"Measurement"> | number | null
    bicep?: FloatNullableFilter<"Measurement"> | number | null
    forearm?: FloatNullableFilter<"Measurement"> | number | null
    wrist?: FloatNullableFilter<"Measurement"> | number | null
    ankle?: FloatNullableFilter<"Measurement"> | number | null
    aiProcessed?: BoolFilter<"Measurement"> | boolean
    created?: DateTimeFilter<"Measurement"> | Date | string
    updated?: DateTimeFilter<"Measurement"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeasurementOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrderInput | SortOrder
    calf?: SortOrderInput | SortOrder
    bicep?: SortOrderInput | SortOrder
    forearm?: SortOrderInput | SortOrder
    wrist?: SortOrderInput | SortOrder
    ankle?: SortOrderInput | SortOrder
    aiProcessed?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    customer?: UserOrderByWithRelationInput
  }

  export type MeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    customerId?: StringFilter<"Measurement"> | string
    chest?: FloatFilter<"Measurement"> | number
    waist?: FloatFilter<"Measurement"> | number
    hip?: FloatFilter<"Measurement"> | number
    inseam?: FloatFilter<"Measurement"> | number
    shoulder?: FloatFilter<"Measurement"> | number
    arm?: FloatFilter<"Measurement"> | number
    height?: FloatFilter<"Measurement"> | number
    weight?: FloatFilter<"Measurement"> | number
    neck?: FloatFilter<"Measurement"> | number
    thigh?: FloatNullableFilter<"Measurement"> | number | null
    calf?: FloatNullableFilter<"Measurement"> | number | null
    bicep?: FloatNullableFilter<"Measurement"> | number | null
    forearm?: FloatNullableFilter<"Measurement"> | number | null
    wrist?: FloatNullableFilter<"Measurement"> | number | null
    ankle?: FloatNullableFilter<"Measurement"> | number | null
    aiProcessed?: BoolFilter<"Measurement"> | boolean
    created?: DateTimeFilter<"Measurement"> | Date | string
    updated?: DateTimeFilter<"Measurement"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrderInput | SortOrder
    calf?: SortOrderInput | SortOrder
    bicep?: SortOrderInput | SortOrder
    forearm?: SortOrderInput | SortOrder
    wrist?: SortOrderInput | SortOrder
    ankle?: SortOrderInput | SortOrder
    aiProcessed?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: MeasurementCountOrderByAggregateInput
    _avg?: MeasurementAvgOrderByAggregateInput
    _max?: MeasurementMaxOrderByAggregateInput
    _min?: MeasurementMinOrderByAggregateInput
    _sum?: MeasurementSumOrderByAggregateInput
  }

  export type MeasurementScalarWhereWithAggregatesInput = {
    AND?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    OR?: MeasurementScalarWhereWithAggregatesInput[]
    NOT?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Measurement"> | string
    customerId?: StringWithAggregatesFilter<"Measurement"> | string
    chest?: FloatWithAggregatesFilter<"Measurement"> | number
    waist?: FloatWithAggregatesFilter<"Measurement"> | number
    hip?: FloatWithAggregatesFilter<"Measurement"> | number
    inseam?: FloatWithAggregatesFilter<"Measurement"> | number
    shoulder?: FloatWithAggregatesFilter<"Measurement"> | number
    arm?: FloatWithAggregatesFilter<"Measurement"> | number
    height?: FloatWithAggregatesFilter<"Measurement"> | number
    weight?: FloatWithAggregatesFilter<"Measurement"> | number
    neck?: FloatWithAggregatesFilter<"Measurement"> | number
    thigh?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    calf?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    bicep?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    forearm?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    wrist?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    ankle?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    aiProcessed?: BoolWithAggregatesFilter<"Measurement"> | boolean
    created?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
  }

  export type ChatChannelWhereInput = {
    AND?: ChatChannelWhereInput | ChatChannelWhereInput[]
    OR?: ChatChannelWhereInput[]
    NOT?: ChatChannelWhereInput | ChatChannelWhereInput[]
    id?: StringFilter<"ChatChannel"> | string
    streamId?: StringFilter<"ChatChannel"> | string
    designId?: StringNullableFilter<"ChatChannel"> | string | null
    createdAt?: DateTimeFilter<"ChatChannel"> | Date | string
    updatedAt?: DateTimeFilter<"ChatChannel"> | Date | string
    participants?: UserListRelationFilter
    design?: XOR<DesignNullableScalarRelationFilter, DesignWhereInput> | null
  }

  export type ChatChannelOrderByWithRelationInput = {
    id?: SortOrder
    streamId?: SortOrder
    designId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: UserOrderByRelationAggregateInput
    design?: DesignOrderByWithRelationInput
  }

  export type ChatChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    streamId?: string
    AND?: ChatChannelWhereInput | ChatChannelWhereInput[]
    OR?: ChatChannelWhereInput[]
    NOT?: ChatChannelWhereInput | ChatChannelWhereInput[]
    designId?: StringNullableFilter<"ChatChannel"> | string | null
    createdAt?: DateTimeFilter<"ChatChannel"> | Date | string
    updatedAt?: DateTimeFilter<"ChatChannel"> | Date | string
    participants?: UserListRelationFilter
    design?: XOR<DesignNullableScalarRelationFilter, DesignWhereInput> | null
  }, "id" | "streamId">

  export type ChatChannelOrderByWithAggregationInput = {
    id?: SortOrder
    streamId?: SortOrder
    designId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatChannelCountOrderByAggregateInput
    _max?: ChatChannelMaxOrderByAggregateInput
    _min?: ChatChannelMinOrderByAggregateInput
  }

  export type ChatChannelScalarWhereWithAggregatesInput = {
    AND?: ChatChannelScalarWhereWithAggregatesInput | ChatChannelScalarWhereWithAggregatesInput[]
    OR?: ChatChannelScalarWhereWithAggregatesInput[]
    NOT?: ChatChannelScalarWhereWithAggregatesInput | ChatChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatChannel"> | string
    streamId?: StringWithAggregatesFilter<"ChatChannel"> | string
    designId?: StringNullableWithAggregatesFilter<"ChatChannel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatChannel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatChannel"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    requestId?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<CustomRequestNullableScalarRelationFilter, CustomRequestWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    request?: CustomRequestOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    requestId?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<CustomRequestNullableScalarRelationFilter, CustomRequestWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    requestId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    userId?: StringNullableFilter<"Log"> | string | null
    method?: StringFilter<"Log"> | string
    route?: StringFilter<"Log"> | string
    status?: IntFilter<"Log"> | number
    requestBody?: StringNullableFilter<"Log"> | string | null
    responseBody?: StringNullableFilter<"Log"> | string | null
    error?: StringNullableFilter<"Log"> | string | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    route?: SortOrder
    status?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    timestamp?: DateTimeFilter<"Log"> | Date | string
    userId?: StringNullableFilter<"Log"> | string | null
    method?: StringFilter<"Log"> | string
    route?: StringFilter<"Log"> | string
    status?: IntFilter<"Log"> | number
    requestBody?: StringNullableFilter<"Log"> | string | null
    responseBody?: StringNullableFilter<"Log"> | string | null
    error?: StringNullableFilter<"Log"> | string | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    route?: SortOrder
    status?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    method?: StringWithAggregatesFilter<"Log"> | string
    route?: StringWithAggregatesFilter<"Log"> | string
    status?: IntWithAggregatesFilter<"Log"> | number
    requestBody?: StringNullableWithAggregatesFilter<"Log"> | string | null
    responseBody?: StringNullableWithAggregatesFilter<"Log"> | string | null
    error?: StringNullableWithAggregatesFilter<"Log"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    key?: EnumDesignCategoryFilter<"Category"> | $Enums.DesignCategory
    label?: StringFilter<"Category"> | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: $Enums.DesignCategory
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    label?: StringFilter<"Category"> | string
  }, "id" | "key">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    key?: EnumDesignCategoryWithAggregatesFilter<"Category"> | $Enums.DesignCategory
    label?: StringWithAggregatesFilter<"Category"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesignCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
    tailor: UserCreateNestedOneWithoutDesignsInput
    chatChannels?: ChatChannelCreateNestedManyWithoutDesignInput
  }

  export type DesignUncheckedCreateInput = {
    id?: string
    tailorId: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutDesignInput
  }

  export type DesignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
    tailor?: UserUpdateOneRequiredWithoutDesignsNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutDesignNestedInput
  }

  export type DesignCreateManyInput = {
    id?: string
    tailorId: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
  }

  export type DesignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
  }

  export type DesignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
  }

  export type CustomRequestCreateInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    customer: UserCreateNestedOneWithoutCustomRequestsInput
    bids?: BidCreateNestedManyWithoutRequestInput
    messages?: ChatMessageCreateNestedManyWithoutRequestInput
    acceptedTailor?: UserCreateNestedOneWithoutAcceptedRequestsInput
    notifications?: NotificationCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUncheckedCreateInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
    bids?: BidUncheckedCreateNestedManyWithoutRequestInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRequestInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: UserUpdateOneRequiredWithoutCustomRequestsNestedInput
    bids?: BidUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUpdateManyWithoutRequestNestedInput
    acceptedTailor?: UserUpdateOneWithoutAcceptedRequestsNestedInput
    notifications?: NotificationUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUncheckedUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestCreateManyInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
  }

  export type CustomRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BidCreateInput = {
    id: string
    price: number
    message: string
    created: Date | string
    status: string
    request: CustomRequestCreateNestedOneWithoutBidsInput
    tailor: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id: string
    requestId: string
    tailorId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    request?: CustomRequestUpdateOneRequiredWithoutBidsNestedInput
    tailor?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BidCreateManyInput = {
    id: string
    requestId: string
    tailorId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomCreateInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    participants?: UserCreateNestedManyWithoutChatRoomsInput
    messages?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    participants?: UserUncheckedCreateNestedManyWithoutChatRoomsInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    participants?: UserUpdateManyWithoutChatRoomsNestedInput
    messages?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutChatRoomsNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageCreateInput = {
    id: string
    content: string
    timestamp: Date | string
    read: boolean
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipient: UserCreateNestedOneWithoutReceivedMessagesInput
    request?: CustomRequestCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id: string
    chatRoomId: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    request?: CustomRequestUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateManyInput = {
    id: string
    chatRoomId: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementCreateInput = {
    id: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
    customer: UserCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateInput = {
    id: string
    customerId: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
  }

  export type MeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementCreateManyInput = {
    id: string
    customerId: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
  }

  export type MeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatChannelCreateInput = {
    id?: string
    streamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserCreateNestedManyWithoutChatChannelsInput
    design?: DesignCreateNestedOneWithoutChatChannelsInput
  }

  export type ChatChannelUncheckedCreateInput = {
    id?: string
    streamId: string
    designId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutChatChannelsInput
  }

  export type ChatChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutChatChannelsNestedInput
    design?: DesignUpdateOneWithoutChatChannelsNestedInput
  }

  export type ChatChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    designId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutChatChannelsNestedInput
  }

  export type ChatChannelCreateManyInput = {
    id?: string
    streamId: string
    designId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    designId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    request?: CustomRequestCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    read?: boolean
    createdAt?: Date | string
    requestId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    request?: CustomRequestUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    message: string
    read?: boolean
    createdAt?: Date | string
    requestId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    method: string
    route: string
    status: number
    requestBody?: string | null
    responseBody?: string | null
    error?: string | null
  }

  export type LogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    method: string
    route: string
    status: number
    requestBody?: string | null
    responseBody?: string | null
    error?: string | null
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    method: string
    route: string
    status: number
    requestBody?: string | null
    responseBody?: string | null
    error?: string | null
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    key: $Enums.DesignCategory
    label: string
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    key: $Enums.DesignCategory
    label: string
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyInput = {
    id?: string
    key: $Enums.DesignCategory
    label: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    label?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DesignListRelationFilter = {
    every?: DesignWhereInput
    some?: DesignWhereInput
    none?: DesignWhereInput
  }

  export type CustomRequestListRelationFilter = {
    every?: CustomRequestWhereInput
    some?: CustomRequestWhereInput
    none?: CustomRequestWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type MeasurementListRelationFilter = {
    every?: MeasurementWhereInput
    some?: MeasurementWhereInput
    none?: MeasurementWhereInput
  }

  export type ChatChannelListRelationFilter = {
    every?: ChatChannelWhereInput
    some?: ChatChannelWhereInput
    none?: ChatChannelWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DesignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    streamId?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    streamId?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    streamId?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDesignCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignCategory | EnumDesignCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignCategoryFilter<$PrismaModel> | $Enums.DesignCategory
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DesignCountOrderByAggregateInput = {
    id?: SortOrder
    tailorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrls?: SortOrder
    category?: SortOrder
    fabricType?: SortOrder
    created?: SortOrder
    availableSizes?: SortOrder
    tags?: SortOrder
  }

  export type DesignAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DesignMaxOrderByAggregateInput = {
    id?: SortOrder
    tailorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    fabricType?: SortOrder
    created?: SortOrder
  }

  export type DesignMinOrderByAggregateInput = {
    id?: SortOrder
    tailorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    fabricType?: SortOrder
    created?: SortOrder
  }

  export type DesignSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDesignCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignCategory | EnumDesignCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DesignCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignCategoryFilter<$PrismaModel>
    _max?: NestedEnumDesignCategoryFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CustomRequestCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    proposedPrice?: SortOrder
    status?: SortOrder
    created?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    acceptedTailorId?: SortOrder
  }

  export type CustomRequestAvgOrderByAggregateInput = {
    proposedPrice?: SortOrder
  }

  export type CustomRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    proposedPrice?: SortOrder
    status?: SortOrder
    created?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    acceptedTailorId?: SortOrder
  }

  export type CustomRequestMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    proposedPrice?: SortOrder
    status?: SortOrder
    created?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    acceptedTailorId?: SortOrder
  }

  export type CustomRequestSumOrderByAggregateInput = {
    proposedPrice?: SortOrder
  }

  export type CustomRequestScalarRelationFilter = {
    is?: CustomRequestWhereInput
    isNot?: CustomRequestWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    tailorId?: SortOrder
    price?: SortOrder
    message?: SortOrder
    created?: SortOrder
    status?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    tailorId?: SortOrder
    price?: SortOrder
    message?: SortOrder
    created?: SortOrder
    status?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    tailorId?: SortOrder
    price?: SortOrder
    message?: SortOrder
    created?: SortOrder
    status?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    lastMessage?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    lastMessage?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    lastMessage?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type CustomRequestNullableScalarRelationFilter = {
    is?: CustomRequestWhereInput | null
    isNot?: CustomRequestWhereInput | null
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    requestId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    requestId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    requestId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrder
    calf?: SortOrder
    bicep?: SortOrder
    forearm?: SortOrder
    wrist?: SortOrder
    ankle?: SortOrder
    aiProcessed?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MeasurementAvgOrderByAggregateInput = {
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrder
    calf?: SortOrder
    bicep?: SortOrder
    forearm?: SortOrder
    wrist?: SortOrder
    ankle?: SortOrder
  }

  export type MeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrder
    calf?: SortOrder
    bicep?: SortOrder
    forearm?: SortOrder
    wrist?: SortOrder
    ankle?: SortOrder
    aiProcessed?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrder
    calf?: SortOrder
    bicep?: SortOrder
    forearm?: SortOrder
    wrist?: SortOrder
    ankle?: SortOrder
    aiProcessed?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MeasurementSumOrderByAggregateInput = {
    chest?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    inseam?: SortOrder
    shoulder?: SortOrder
    arm?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    neck?: SortOrder
    thigh?: SortOrder
    calf?: SortOrder
    bicep?: SortOrder
    forearm?: SortOrder
    wrist?: SortOrder
    ankle?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DesignNullableScalarRelationFilter = {
    is?: DesignWhereInput | null
    isNot?: DesignWhereInput | null
  }

  export type ChatChannelCountOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    designId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    designId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatChannelMinOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    designId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    route?: SortOrder
    status?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    route?: SortOrder
    status?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    route?: SortOrder
    status?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
  }

  export type DesignCreateNestedManyWithoutTailorInput = {
    create?: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput> | DesignCreateWithoutTailorInput[] | DesignUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutTailorInput | DesignCreateOrConnectWithoutTailorInput[]
    createMany?: DesignCreateManyTailorInputEnvelope
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
  }

  export type CustomRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput> | CustomRequestCreateWithoutCustomerInput[] | CustomRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutCustomerInput | CustomRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomRequestCreateManyCustomerInputEnvelope
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutTailorInput = {
    create?: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput> | BidCreateWithoutTailorInput[] | BidUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTailorInput | BidCreateOrConnectWithoutTailorInput[]
    createMany?: BidCreateManyTailorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput> | ChatRoomCreateWithoutParticipantsInput[] | ChatRoomUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutParticipantsInput | ChatRoomCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type MeasurementCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput> | MeasurementCreateWithoutCustomerInput[] | MeasurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutCustomerInput | MeasurementCreateOrConnectWithoutCustomerInput[]
    createMany?: MeasurementCreateManyCustomerInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type ChatChannelCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput> | ChatChannelCreateWithoutParticipantsInput[] | ChatChannelUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutParticipantsInput | ChatChannelCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
  }

  export type CustomRequestCreateNestedManyWithoutAcceptedTailorInput = {
    create?: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput> | CustomRequestCreateWithoutAcceptedTailorInput[] | CustomRequestUncheckedCreateWithoutAcceptedTailorInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutAcceptedTailorInput | CustomRequestCreateOrConnectWithoutAcceptedTailorInput[]
    createMany?: CustomRequestCreateManyAcceptedTailorInputEnvelope
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DesignUncheckedCreateNestedManyWithoutTailorInput = {
    create?: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput> | DesignCreateWithoutTailorInput[] | DesignUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutTailorInput | DesignCreateOrConnectWithoutTailorInput[]
    createMany?: DesignCreateManyTailorInputEnvelope
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
  }

  export type CustomRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput> | CustomRequestCreateWithoutCustomerInput[] | CustomRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutCustomerInput | CustomRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomRequestCreateManyCustomerInputEnvelope
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutTailorInput = {
    create?: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput> | BidCreateWithoutTailorInput[] | BidUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTailorInput | BidCreateOrConnectWithoutTailorInput[]
    createMany?: BidCreateManyTailorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput> | ChatRoomCreateWithoutParticipantsInput[] | ChatRoomUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutParticipantsInput | ChatRoomCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput> | MeasurementCreateWithoutCustomerInput[] | MeasurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutCustomerInput | MeasurementCreateOrConnectWithoutCustomerInput[]
    createMany?: MeasurementCreateManyCustomerInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput> | ChatChannelCreateWithoutParticipantsInput[] | ChatChannelUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutParticipantsInput | ChatChannelCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
  }

  export type CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput = {
    create?: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput> | CustomRequestCreateWithoutAcceptedTailorInput[] | CustomRequestUncheckedCreateWithoutAcceptedTailorInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutAcceptedTailorInput | CustomRequestCreateOrConnectWithoutAcceptedTailorInput[]
    createMany?: CustomRequestCreateManyAcceptedTailorInputEnvelope
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DesignUpdateManyWithoutTailorNestedInput = {
    create?: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput> | DesignCreateWithoutTailorInput[] | DesignUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutTailorInput | DesignCreateOrConnectWithoutTailorInput[]
    upsert?: DesignUpsertWithWhereUniqueWithoutTailorInput | DesignUpsertWithWhereUniqueWithoutTailorInput[]
    createMany?: DesignCreateManyTailorInputEnvelope
    set?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    disconnect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    delete?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    update?: DesignUpdateWithWhereUniqueWithoutTailorInput | DesignUpdateWithWhereUniqueWithoutTailorInput[]
    updateMany?: DesignUpdateManyWithWhereWithoutTailorInput | DesignUpdateManyWithWhereWithoutTailorInput[]
    deleteMany?: DesignScalarWhereInput | DesignScalarWhereInput[]
  }

  export type CustomRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput> | CustomRequestCreateWithoutCustomerInput[] | CustomRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutCustomerInput | CustomRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomRequestUpsertWithWhereUniqueWithoutCustomerInput | CustomRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomRequestCreateManyCustomerInputEnvelope
    set?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    disconnect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    delete?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    update?: CustomRequestUpdateWithWhereUniqueWithoutCustomerInput | CustomRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomRequestUpdateManyWithWhereWithoutCustomerInput | CustomRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
  }

  export type BidUpdateManyWithoutTailorNestedInput = {
    create?: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput> | BidCreateWithoutTailorInput[] | BidUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTailorInput | BidCreateOrConnectWithoutTailorInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutTailorInput | BidUpsertWithWhereUniqueWithoutTailorInput[]
    createMany?: BidCreateManyTailorInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutTailorInput | BidUpdateWithWhereUniqueWithoutTailorInput[]
    updateMany?: BidUpdateManyWithWhereWithoutTailorInput | BidUpdateManyWithWhereWithoutTailorInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput> | ChatRoomCreateWithoutParticipantsInput[] | ChatRoomUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutParticipantsInput | ChatRoomCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutParticipantsInput | ChatRoomUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutParticipantsInput | ChatRoomUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutParticipantsInput | ChatRoomUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRecipientInput | ChatMessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRecipientInput | ChatMessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRecipientInput | ChatMessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type MeasurementUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput> | MeasurementCreateWithoutCustomerInput[] | MeasurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutCustomerInput | MeasurementCreateOrConnectWithoutCustomerInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutCustomerInput | MeasurementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MeasurementCreateManyCustomerInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutCustomerInput | MeasurementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutCustomerInput | MeasurementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type ChatChannelUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput> | ChatChannelCreateWithoutParticipantsInput[] | ChatChannelUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutParticipantsInput | ChatChannelCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatChannelUpsertWithWhereUniqueWithoutParticipantsInput | ChatChannelUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    disconnect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    delete?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    update?: ChatChannelUpdateWithWhereUniqueWithoutParticipantsInput | ChatChannelUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatChannelUpdateManyWithWhereWithoutParticipantsInput | ChatChannelUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
  }

  export type CustomRequestUpdateManyWithoutAcceptedTailorNestedInput = {
    create?: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput> | CustomRequestCreateWithoutAcceptedTailorInput[] | CustomRequestUncheckedCreateWithoutAcceptedTailorInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutAcceptedTailorInput | CustomRequestCreateOrConnectWithoutAcceptedTailorInput[]
    upsert?: CustomRequestUpsertWithWhereUniqueWithoutAcceptedTailorInput | CustomRequestUpsertWithWhereUniqueWithoutAcceptedTailorInput[]
    createMany?: CustomRequestCreateManyAcceptedTailorInputEnvelope
    set?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    disconnect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    delete?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    update?: CustomRequestUpdateWithWhereUniqueWithoutAcceptedTailorInput | CustomRequestUpdateWithWhereUniqueWithoutAcceptedTailorInput[]
    updateMany?: CustomRequestUpdateManyWithWhereWithoutAcceptedTailorInput | CustomRequestUpdateManyWithWhereWithoutAcceptedTailorInput[]
    deleteMany?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DesignUncheckedUpdateManyWithoutTailorNestedInput = {
    create?: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput> | DesignCreateWithoutTailorInput[] | DesignUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutTailorInput | DesignCreateOrConnectWithoutTailorInput[]
    upsert?: DesignUpsertWithWhereUniqueWithoutTailorInput | DesignUpsertWithWhereUniqueWithoutTailorInput[]
    createMany?: DesignCreateManyTailorInputEnvelope
    set?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    disconnect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    delete?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    update?: DesignUpdateWithWhereUniqueWithoutTailorInput | DesignUpdateWithWhereUniqueWithoutTailorInput[]
    updateMany?: DesignUpdateManyWithWhereWithoutTailorInput | DesignUpdateManyWithWhereWithoutTailorInput[]
    deleteMany?: DesignScalarWhereInput | DesignScalarWhereInput[]
  }

  export type CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput> | CustomRequestCreateWithoutCustomerInput[] | CustomRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutCustomerInput | CustomRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomRequestUpsertWithWhereUniqueWithoutCustomerInput | CustomRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomRequestCreateManyCustomerInputEnvelope
    set?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    disconnect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    delete?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    update?: CustomRequestUpdateWithWhereUniqueWithoutCustomerInput | CustomRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomRequestUpdateManyWithWhereWithoutCustomerInput | CustomRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutTailorNestedInput = {
    create?: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput> | BidCreateWithoutTailorInput[] | BidUncheckedCreateWithoutTailorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTailorInput | BidCreateOrConnectWithoutTailorInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutTailorInput | BidUpsertWithWhereUniqueWithoutTailorInput[]
    createMany?: BidCreateManyTailorInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutTailorInput | BidUpdateWithWhereUniqueWithoutTailorInput[]
    updateMany?: BidUpdateManyWithWhereWithoutTailorInput | BidUpdateManyWithWhereWithoutTailorInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput> | ChatRoomCreateWithoutParticipantsInput[] | ChatRoomUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutParticipantsInput | ChatRoomCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutParticipantsInput | ChatRoomUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutParticipantsInput | ChatRoomUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutParticipantsInput | ChatRoomUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRecipientInput | ChatMessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRecipientInput | ChatMessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRecipientInput | ChatMessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput> | MeasurementCreateWithoutCustomerInput[] | MeasurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutCustomerInput | MeasurementCreateOrConnectWithoutCustomerInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutCustomerInput | MeasurementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MeasurementCreateManyCustomerInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutCustomerInput | MeasurementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutCustomerInput | MeasurementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput> | ChatChannelCreateWithoutParticipantsInput[] | ChatChannelUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutParticipantsInput | ChatChannelCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatChannelUpsertWithWhereUniqueWithoutParticipantsInput | ChatChannelUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    disconnect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    delete?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    update?: ChatChannelUpdateWithWhereUniqueWithoutParticipantsInput | ChatChannelUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatChannelUpdateManyWithWhereWithoutParticipantsInput | ChatChannelUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
  }

  export type CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput = {
    create?: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput> | CustomRequestCreateWithoutAcceptedTailorInput[] | CustomRequestUncheckedCreateWithoutAcceptedTailorInput[]
    connectOrCreate?: CustomRequestCreateOrConnectWithoutAcceptedTailorInput | CustomRequestCreateOrConnectWithoutAcceptedTailorInput[]
    upsert?: CustomRequestUpsertWithWhereUniqueWithoutAcceptedTailorInput | CustomRequestUpsertWithWhereUniqueWithoutAcceptedTailorInput[]
    createMany?: CustomRequestCreateManyAcceptedTailorInputEnvelope
    set?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    disconnect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    delete?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    connect?: CustomRequestWhereUniqueInput | CustomRequestWhereUniqueInput[]
    update?: CustomRequestUpdateWithWhereUniqueWithoutAcceptedTailorInput | CustomRequestUpdateWithWhereUniqueWithoutAcceptedTailorInput[]
    updateMany?: CustomRequestUpdateManyWithWhereWithoutAcceptedTailorInput | CustomRequestUpdateManyWithWhereWithoutAcceptedTailorInput[]
    deleteMany?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DesignCreateimageUrlsInput = {
    set: string[]
  }

  export type DesignCreateavailableSizesInput = {
    set: string[]
  }

  export type DesignCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDesignsInput = {
    create?: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatChannelCreateNestedManyWithoutDesignInput = {
    create?: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput> | ChatChannelCreateWithoutDesignInput[] | ChatChannelUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutDesignInput | ChatChannelCreateOrConnectWithoutDesignInput[]
    createMany?: ChatChannelCreateManyDesignInputEnvelope
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
  }

  export type ChatChannelUncheckedCreateNestedManyWithoutDesignInput = {
    create?: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput> | ChatChannelCreateWithoutDesignInput[] | ChatChannelUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutDesignInput | ChatChannelCreateOrConnectWithoutDesignInput[]
    createMany?: ChatChannelCreateManyDesignInputEnvelope
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DesignUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDesignCategoryFieldUpdateOperationsInput = {
    set?: $Enums.DesignCategory
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DesignUpdateavailableSizesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DesignUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDesignsNestedInput = {
    create?: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignsInput
    upsert?: UserUpsertWithoutDesignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDesignsInput, UserUpdateWithoutDesignsInput>, UserUncheckedUpdateWithoutDesignsInput>
  }

  export type ChatChannelUpdateManyWithoutDesignNestedInput = {
    create?: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput> | ChatChannelCreateWithoutDesignInput[] | ChatChannelUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutDesignInput | ChatChannelCreateOrConnectWithoutDesignInput[]
    upsert?: ChatChannelUpsertWithWhereUniqueWithoutDesignInput | ChatChannelUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: ChatChannelCreateManyDesignInputEnvelope
    set?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    disconnect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    delete?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    update?: ChatChannelUpdateWithWhereUniqueWithoutDesignInput | ChatChannelUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: ChatChannelUpdateManyWithWhereWithoutDesignInput | ChatChannelUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
  }

  export type ChatChannelUncheckedUpdateManyWithoutDesignNestedInput = {
    create?: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput> | ChatChannelCreateWithoutDesignInput[] | ChatChannelUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: ChatChannelCreateOrConnectWithoutDesignInput | ChatChannelCreateOrConnectWithoutDesignInput[]
    upsert?: ChatChannelUpsertWithWhereUniqueWithoutDesignInput | ChatChannelUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: ChatChannelCreateManyDesignInputEnvelope
    set?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    disconnect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    delete?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    connect?: ChatChannelWhereUniqueInput | ChatChannelWhereUniqueInput[]
    update?: ChatChannelUpdateWithWhereUniqueWithoutDesignInput | ChatChannelUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: ChatChannelUpdateManyWithWhereWithoutDesignInput | ChatChannelUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomRequestsInput = {
    create?: XOR<UserCreateWithoutCustomRequestsInput, UserUncheckedCreateWithoutCustomRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type BidCreateNestedManyWithoutRequestInput = {
    create?: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput> | BidCreateWithoutRequestInput[] | BidUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BidCreateOrConnectWithoutRequestInput | BidCreateOrConnectWithoutRequestInput[]
    createMany?: BidCreateManyRequestInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutRequestInput = {
    create?: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput> | ChatMessageCreateWithoutRequestInput[] | ChatMessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRequestInput | ChatMessageCreateOrConnectWithoutRequestInput[]
    createMany?: ChatMessageCreateManyRequestInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAcceptedRequestsInput = {
    create?: XOR<UserCreateWithoutAcceptedRequestsInput, UserUncheckedCreateWithoutAcceptedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcceptedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutRequestInput = {
    create?: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput> | NotificationCreateWithoutRequestInput[] | NotificationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRequestInput | NotificationCreateOrConnectWithoutRequestInput[]
    createMany?: NotificationCreateManyRequestInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput> | BidCreateWithoutRequestInput[] | BidUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BidCreateOrConnectWithoutRequestInput | BidCreateOrConnectWithoutRequestInput[]
    createMany?: BidCreateManyRequestInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput> | ChatMessageCreateWithoutRequestInput[] | ChatMessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRequestInput | ChatMessageCreateOrConnectWithoutRequestInput[]
    createMany?: ChatMessageCreateManyRequestInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput> | NotificationCreateWithoutRequestInput[] | NotificationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRequestInput | NotificationCreateOrConnectWithoutRequestInput[]
    createMany?: NotificationCreateManyRequestInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomRequestsNestedInput = {
    create?: XOR<UserCreateWithoutCustomRequestsInput, UserUncheckedCreateWithoutCustomRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomRequestsInput
    upsert?: UserUpsertWithoutCustomRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomRequestsInput, UserUpdateWithoutCustomRequestsInput>, UserUncheckedUpdateWithoutCustomRequestsInput>
  }

  export type BidUpdateManyWithoutRequestNestedInput = {
    create?: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput> | BidCreateWithoutRequestInput[] | BidUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BidCreateOrConnectWithoutRequestInput | BidCreateOrConnectWithoutRequestInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutRequestInput | BidUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: BidCreateManyRequestInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutRequestInput | BidUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: BidUpdateManyWithWhereWithoutRequestInput | BidUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput> | ChatMessageCreateWithoutRequestInput[] | ChatMessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRequestInput | ChatMessageCreateOrConnectWithoutRequestInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRequestInput | ChatMessageUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ChatMessageCreateManyRequestInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRequestInput | ChatMessageUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRequestInput | ChatMessageUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAcceptedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutAcceptedRequestsInput, UserUncheckedCreateWithoutAcceptedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcceptedRequestsInput
    upsert?: UserUpsertWithoutAcceptedRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAcceptedRequestsInput, UserUpdateWithoutAcceptedRequestsInput>, UserUncheckedUpdateWithoutAcceptedRequestsInput>
  }

  export type NotificationUpdateManyWithoutRequestNestedInput = {
    create?: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput> | NotificationCreateWithoutRequestInput[] | NotificationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRequestInput | NotificationCreateOrConnectWithoutRequestInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRequestInput | NotificationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: NotificationCreateManyRequestInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRequestInput | NotificationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRequestInput | NotificationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput> | BidCreateWithoutRequestInput[] | BidUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BidCreateOrConnectWithoutRequestInput | BidCreateOrConnectWithoutRequestInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutRequestInput | BidUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: BidCreateManyRequestInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutRequestInput | BidUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: BidUpdateManyWithWhereWithoutRequestInput | BidUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput> | ChatMessageCreateWithoutRequestInput[] | ChatMessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRequestInput | ChatMessageCreateOrConnectWithoutRequestInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRequestInput | ChatMessageUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ChatMessageCreateManyRequestInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRequestInput | ChatMessageUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRequestInput | ChatMessageUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput> | NotificationCreateWithoutRequestInput[] | NotificationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRequestInput | NotificationCreateOrConnectWithoutRequestInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRequestInput | NotificationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: NotificationCreateManyRequestInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRequestInput | NotificationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRequestInput | NotificationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CustomRequestCreateNestedOneWithoutBidsInput = {
    create?: XOR<CustomRequestCreateWithoutBidsInput, CustomRequestUncheckedCreateWithoutBidsInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutBidsInput
    connect?: CustomRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type CustomRequestUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<CustomRequestCreateWithoutBidsInput, CustomRequestUncheckedCreateWithoutBidsInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutBidsInput
    upsert?: CustomRequestUpsertWithoutBidsInput
    connect?: CustomRequestWhereUniqueInput
    update?: XOR<XOR<CustomRequestUpdateToOneWithWhereWithoutBidsInput, CustomRequestUpdateWithoutBidsInput>, CustomRequestUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserCreateNestedManyWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatRoomsInput | UserUpsertWithWhereUniqueWithoutChatRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatRoomsInput | UserUpdateWithWhereUniqueWithoutChatRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatRoomsInput | UserUpdateManyWithWhereWithoutChatRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatRoomsInput | UserUpsertWithWhereUniqueWithoutChatRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatRoomsInput | UserUpdateWithWhereUniqueWithoutChatRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatRoomsInput | UserUpdateManyWithWhereWithoutChatRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomRequestCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CustomRequestCreateWithoutMessagesInput, CustomRequestUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutMessagesInput
    connect?: CustomRequestWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type CustomRequestUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<CustomRequestCreateWithoutMessagesInput, CustomRequestUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutMessagesInput
    upsert?: CustomRequestUpsertWithoutMessagesInput
    disconnect?: CustomRequestWhereInput | boolean
    delete?: CustomRequestWhereInput | boolean
    connect?: CustomRequestWhereUniqueInput
    update?: XOR<XOR<CustomRequestUpdateToOneWithWhereWithoutMessagesInput, CustomRequestUpdateWithoutMessagesInput>, CustomRequestUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput
    upsert?: UserUpsertWithoutMeasurementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeasurementsInput, UserUpdateWithoutMeasurementsInput>, UserUncheckedUpdateWithoutMeasurementsInput>
  }

  export type UserCreateNestedManyWithoutChatChannelsInput = {
    create?: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput> | UserCreateWithoutChatChannelsInput[] | UserUncheckedCreateWithoutChatChannelsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatChannelsInput | UserCreateOrConnectWithoutChatChannelsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DesignCreateNestedOneWithoutChatChannelsInput = {
    create?: XOR<DesignCreateWithoutChatChannelsInput, DesignUncheckedCreateWithoutChatChannelsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutChatChannelsInput
    connect?: DesignWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutChatChannelsInput = {
    create?: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput> | UserCreateWithoutChatChannelsInput[] | UserUncheckedCreateWithoutChatChannelsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatChannelsInput | UserCreateOrConnectWithoutChatChannelsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutChatChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput> | UserCreateWithoutChatChannelsInput[] | UserUncheckedCreateWithoutChatChannelsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatChannelsInput | UserCreateOrConnectWithoutChatChannelsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatChannelsInput | UserUpsertWithWhereUniqueWithoutChatChannelsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatChannelsInput | UserUpdateWithWhereUniqueWithoutChatChannelsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatChannelsInput | UserUpdateManyWithWhereWithoutChatChannelsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DesignUpdateOneWithoutChatChannelsNestedInput = {
    create?: XOR<DesignCreateWithoutChatChannelsInput, DesignUncheckedCreateWithoutChatChannelsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutChatChannelsInput
    upsert?: DesignUpsertWithoutChatChannelsInput
    disconnect?: DesignWhereInput | boolean
    delete?: DesignWhereInput | boolean
    connect?: DesignWhereUniqueInput
    update?: XOR<XOR<DesignUpdateToOneWithWhereWithoutChatChannelsInput, DesignUpdateWithoutChatChannelsInput>, DesignUncheckedUpdateWithoutChatChannelsInput>
  }

  export type UserUncheckedUpdateManyWithoutChatChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput> | UserCreateWithoutChatChannelsInput[] | UserUncheckedCreateWithoutChatChannelsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatChannelsInput | UserCreateOrConnectWithoutChatChannelsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatChannelsInput | UserUpsertWithWhereUniqueWithoutChatChannelsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatChannelsInput | UserUpdateWithWhereUniqueWithoutChatChannelsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatChannelsInput | UserUpdateManyWithWhereWithoutChatChannelsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type CustomRequestCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CustomRequestCreateWithoutNotificationsInput, CustomRequestUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutNotificationsInput
    connect?: CustomRequestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type CustomRequestUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<CustomRequestCreateWithoutNotificationsInput, CustomRequestUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CustomRequestCreateOrConnectWithoutNotificationsInput
    upsert?: CustomRequestUpsertWithoutNotificationsInput
    disconnect?: CustomRequestWhereInput | boolean
    delete?: CustomRequestWhereInput | boolean
    connect?: CustomRequestWhereUniqueInput
    update?: XOR<XOR<CustomRequestUpdateToOneWithWhereWithoutNotificationsInput, CustomRequestUpdateWithoutNotificationsInput>, CustomRequestUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDesignCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignCategory | EnumDesignCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignCategoryFilter<$PrismaModel> | $Enums.DesignCategory
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDesignCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignCategory | EnumDesignCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignCategory[] | ListEnumDesignCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DesignCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignCategoryFilter<$PrismaModel>
    _max?: NestedEnumDesignCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DesignCreateWithoutTailorInput = {
    id?: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
    chatChannels?: ChatChannelCreateNestedManyWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutTailorInput = {
    id?: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutTailorInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput>
  }

  export type DesignCreateManyTailorInputEnvelope = {
    data: DesignCreateManyTailorInput | DesignCreateManyTailorInput[]
    skipDuplicates?: boolean
  }

  export type CustomRequestCreateWithoutCustomerInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    bids?: BidCreateNestedManyWithoutRequestInput
    messages?: ChatMessageCreateNestedManyWithoutRequestInput
    acceptedTailor?: UserCreateNestedOneWithoutAcceptedRequestsInput
    notifications?: NotificationCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUncheckedCreateWithoutCustomerInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
    bids?: BidUncheckedCreateNestedManyWithoutRequestInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRequestInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestCreateOrConnectWithoutCustomerInput = {
    where: CustomRequestWhereUniqueInput
    create: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput>
  }

  export type CustomRequestCreateManyCustomerInputEnvelope = {
    data: CustomRequestCreateManyCustomerInput | CustomRequestCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutTailorInput = {
    id: string
    price: number
    message: string
    created: Date | string
    status: string
    request: CustomRequestCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutTailorInput = {
    id: string
    requestId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type BidCreateOrConnectWithoutTailorInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput>
  }

  export type BidCreateManyTailorInputEnvelope = {
    data: BidCreateManyTailorInput | BidCreateManyTailorInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutParticipantsInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    messages?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutParticipantsInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutParticipantsInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput>
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id: string
    content: string
    timestamp: Date | string
    read: boolean
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    recipient: UserCreateNestedOneWithoutReceivedMessagesInput
    request?: CustomRequestCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id: string
    chatRoomId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutRecipientInput = {
    id: string
    content: string
    timestamp: Date | string
    read: boolean
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    request?: CustomRequestCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRecipientInput = {
    id: string
    chatRoomId: string
    senderId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput>
  }

  export type ChatMessageCreateManyRecipientInputEnvelope = {
    data: ChatMessageCreateManyRecipientInput | ChatMessageCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type MeasurementCreateWithoutCustomerInput = {
    id: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
  }

  export type MeasurementUncheckedCreateWithoutCustomerInput = {
    id: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
  }

  export type MeasurementCreateOrConnectWithoutCustomerInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput>
  }

  export type MeasurementCreateManyCustomerInputEnvelope = {
    data: MeasurementCreateManyCustomerInput | MeasurementCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ChatChannelCreateWithoutParticipantsInput = {
    id?: string
    streamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    design?: DesignCreateNestedOneWithoutChatChannelsInput
  }

  export type ChatChannelUncheckedCreateWithoutParticipantsInput = {
    id?: string
    streamId: string
    designId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatChannelCreateOrConnectWithoutParticipantsInput = {
    where: ChatChannelWhereUniqueInput
    create: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput>
  }

  export type CustomRequestCreateWithoutAcceptedTailorInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    customer: UserCreateNestedOneWithoutCustomRequestsInput
    bids?: BidCreateNestedManyWithoutRequestInput
    messages?: ChatMessageCreateNestedManyWithoutRequestInput
    notifications?: NotificationCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUncheckedCreateWithoutAcceptedTailorInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    bids?: BidUncheckedCreateNestedManyWithoutRequestInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRequestInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestCreateOrConnectWithoutAcceptedTailorInput = {
    where: CustomRequestWhereUniqueInput
    create: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput>
  }

  export type CustomRequestCreateManyAcceptedTailorInputEnvelope = {
    data: CustomRequestCreateManyAcceptedTailorInput | CustomRequestCreateManyAcceptedTailorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    request?: CustomRequestCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    requestId?: string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DesignUpsertWithWhereUniqueWithoutTailorInput = {
    where: DesignWhereUniqueInput
    update: XOR<DesignUpdateWithoutTailorInput, DesignUncheckedUpdateWithoutTailorInput>
    create: XOR<DesignCreateWithoutTailorInput, DesignUncheckedCreateWithoutTailorInput>
  }

  export type DesignUpdateWithWhereUniqueWithoutTailorInput = {
    where: DesignWhereUniqueInput
    data: XOR<DesignUpdateWithoutTailorInput, DesignUncheckedUpdateWithoutTailorInput>
  }

  export type DesignUpdateManyWithWhereWithoutTailorInput = {
    where: DesignScalarWhereInput
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyWithoutTailorInput>
  }

  export type DesignScalarWhereInput = {
    AND?: DesignScalarWhereInput | DesignScalarWhereInput[]
    OR?: DesignScalarWhereInput[]
    NOT?: DesignScalarWhereInput | DesignScalarWhereInput[]
    id?: StringFilter<"Design"> | string
    tailorId?: StringFilter<"Design"> | string
    title?: StringFilter<"Design"> | string
    description?: StringFilter<"Design"> | string
    price?: IntFilter<"Design"> | number
    imageUrls?: StringNullableListFilter<"Design">
    category?: EnumDesignCategoryFilter<"Design"> | $Enums.DesignCategory
    fabricType?: StringFilter<"Design"> | string
    created?: DateTimeFilter<"Design"> | Date | string
    availableSizes?: StringNullableListFilter<"Design">
    tags?: StringNullableListFilter<"Design">
  }

  export type CustomRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomRequestWhereUniqueInput
    update: XOR<CustomRequestUpdateWithoutCustomerInput, CustomRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomRequestCreateWithoutCustomerInput, CustomRequestUncheckedCreateWithoutCustomerInput>
  }

  export type CustomRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomRequestWhereUniqueInput
    data: XOR<CustomRequestUpdateWithoutCustomerInput, CustomRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomRequestScalarWhereInput
    data: XOR<CustomRequestUpdateManyMutationInput, CustomRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomRequestScalarWhereInput = {
    AND?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
    OR?: CustomRequestScalarWhereInput[]
    NOT?: CustomRequestScalarWhereInput | CustomRequestScalarWhereInput[]
    id?: StringFilter<"CustomRequest"> | string
    customerId?: StringFilter<"CustomRequest"> | string
    title?: StringFilter<"CustomRequest"> | string
    description?: StringFilter<"CustomRequest"> | string
    proposedPrice?: IntFilter<"CustomRequest"> | number
    status?: StringFilter<"CustomRequest"> | string
    created?: DateTimeFilter<"CustomRequest"> | Date | string
    deadline?: DateTimeNullableFilter<"CustomRequest"> | Date | string | null
    imageUrl?: StringNullableFilter<"CustomRequest"> | string | null
    acceptedTailorId?: StringNullableFilter<"CustomRequest"> | string | null
  }

  export type BidUpsertWithWhereUniqueWithoutTailorInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutTailorInput, BidUncheckedUpdateWithoutTailorInput>
    create: XOR<BidCreateWithoutTailorInput, BidUncheckedCreateWithoutTailorInput>
  }

  export type BidUpdateWithWhereUniqueWithoutTailorInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutTailorInput, BidUncheckedUpdateWithoutTailorInput>
  }

  export type BidUpdateManyWithWhereWithoutTailorInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutTailorInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    requestId?: StringFilter<"Bid"> | string
    tailorId?: StringFilter<"Bid"> | string
    price?: IntFilter<"Bid"> | number
    message?: StringFilter<"Bid"> | string
    created?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutParticipantsInput, ChatRoomUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ChatRoomCreateWithoutParticipantsInput, ChatRoomUncheckedCreateWithoutParticipantsInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutParticipantsInput, ChatRoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutParticipantsInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    lastMessage?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    unreadCount?: IntFilter<"ChatRoom"> | number
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    recipientId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    read?: BoolFilter<"ChatMessage"> | boolean
    requestId?: StringNullableFilter<"ChatMessage"> | string | null
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutRecipientInput, ChatMessageUncheckedUpdateWithoutRecipientInput>
    create: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutRecipientInput, ChatMessageUncheckedUpdateWithoutRecipientInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutRecipientInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutRecipientInput>
  }

  export type MeasurementUpsertWithWhereUniqueWithoutCustomerInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutCustomerInput, MeasurementUncheckedUpdateWithoutCustomerInput>
    create: XOR<MeasurementCreateWithoutCustomerInput, MeasurementUncheckedCreateWithoutCustomerInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutCustomerInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutCustomerInput, MeasurementUncheckedUpdateWithoutCustomerInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutCustomerInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutCustomerInput>
  }

  export type MeasurementScalarWhereInput = {
    AND?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    OR?: MeasurementScalarWhereInput[]
    NOT?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    id?: StringFilter<"Measurement"> | string
    customerId?: StringFilter<"Measurement"> | string
    chest?: FloatFilter<"Measurement"> | number
    waist?: FloatFilter<"Measurement"> | number
    hip?: FloatFilter<"Measurement"> | number
    inseam?: FloatFilter<"Measurement"> | number
    shoulder?: FloatFilter<"Measurement"> | number
    arm?: FloatFilter<"Measurement"> | number
    height?: FloatFilter<"Measurement"> | number
    weight?: FloatFilter<"Measurement"> | number
    neck?: FloatFilter<"Measurement"> | number
    thigh?: FloatNullableFilter<"Measurement"> | number | null
    calf?: FloatNullableFilter<"Measurement"> | number | null
    bicep?: FloatNullableFilter<"Measurement"> | number | null
    forearm?: FloatNullableFilter<"Measurement"> | number | null
    wrist?: FloatNullableFilter<"Measurement"> | number | null
    ankle?: FloatNullableFilter<"Measurement"> | number | null
    aiProcessed?: BoolFilter<"Measurement"> | boolean
    created?: DateTimeFilter<"Measurement"> | Date | string
    updated?: DateTimeFilter<"Measurement"> | Date | string
  }

  export type ChatChannelUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: ChatChannelWhereUniqueInput
    update: XOR<ChatChannelUpdateWithoutParticipantsInput, ChatChannelUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ChatChannelCreateWithoutParticipantsInput, ChatChannelUncheckedCreateWithoutParticipantsInput>
  }

  export type ChatChannelUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: ChatChannelWhereUniqueInput
    data: XOR<ChatChannelUpdateWithoutParticipantsInput, ChatChannelUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChatChannelUpdateManyWithWhereWithoutParticipantsInput = {
    where: ChatChannelScalarWhereInput
    data: XOR<ChatChannelUpdateManyMutationInput, ChatChannelUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ChatChannelScalarWhereInput = {
    AND?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
    OR?: ChatChannelScalarWhereInput[]
    NOT?: ChatChannelScalarWhereInput | ChatChannelScalarWhereInput[]
    id?: StringFilter<"ChatChannel"> | string
    streamId?: StringFilter<"ChatChannel"> | string
    designId?: StringNullableFilter<"ChatChannel"> | string | null
    createdAt?: DateTimeFilter<"ChatChannel"> | Date | string
    updatedAt?: DateTimeFilter<"ChatChannel"> | Date | string
  }

  export type CustomRequestUpsertWithWhereUniqueWithoutAcceptedTailorInput = {
    where: CustomRequestWhereUniqueInput
    update: XOR<CustomRequestUpdateWithoutAcceptedTailorInput, CustomRequestUncheckedUpdateWithoutAcceptedTailorInput>
    create: XOR<CustomRequestCreateWithoutAcceptedTailorInput, CustomRequestUncheckedCreateWithoutAcceptedTailorInput>
  }

  export type CustomRequestUpdateWithWhereUniqueWithoutAcceptedTailorInput = {
    where: CustomRequestWhereUniqueInput
    data: XOR<CustomRequestUpdateWithoutAcceptedTailorInput, CustomRequestUncheckedUpdateWithoutAcceptedTailorInput>
  }

  export type CustomRequestUpdateManyWithWhereWithoutAcceptedTailorInput = {
    where: CustomRequestScalarWhereInput
    data: XOR<CustomRequestUpdateManyMutationInput, CustomRequestUncheckedUpdateManyWithoutAcceptedTailorInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    requestId?: StringNullableFilter<"Notification"> | string | null
  }

  export type UserCreateWithoutDesignsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDesignsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDesignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
  }

  export type ChatChannelCreateWithoutDesignInput = {
    id?: string
    streamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserCreateNestedManyWithoutChatChannelsInput
  }

  export type ChatChannelUncheckedCreateWithoutDesignInput = {
    id?: string
    streamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutChatChannelsInput
  }

  export type ChatChannelCreateOrConnectWithoutDesignInput = {
    where: ChatChannelWhereUniqueInput
    create: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput>
  }

  export type ChatChannelCreateManyDesignInputEnvelope = {
    data: ChatChannelCreateManyDesignInput | ChatChannelCreateManyDesignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDesignsInput = {
    update: XOR<UserUpdateWithoutDesignsInput, UserUncheckedUpdateWithoutDesignsInput>
    create: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDesignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDesignsInput, UserUncheckedUpdateWithoutDesignsInput>
  }

  export type UserUpdateWithoutDesignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDesignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatChannelUpsertWithWhereUniqueWithoutDesignInput = {
    where: ChatChannelWhereUniqueInput
    update: XOR<ChatChannelUpdateWithoutDesignInput, ChatChannelUncheckedUpdateWithoutDesignInput>
    create: XOR<ChatChannelCreateWithoutDesignInput, ChatChannelUncheckedCreateWithoutDesignInput>
  }

  export type ChatChannelUpdateWithWhereUniqueWithoutDesignInput = {
    where: ChatChannelWhereUniqueInput
    data: XOR<ChatChannelUpdateWithoutDesignInput, ChatChannelUncheckedUpdateWithoutDesignInput>
  }

  export type ChatChannelUpdateManyWithWhereWithoutDesignInput = {
    where: ChatChannelScalarWhereInput
    data: XOR<ChatChannelUpdateManyMutationInput, ChatChannelUncheckedUpdateManyWithoutDesignInput>
  }

  export type UserCreateWithoutCustomRequestsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomRequestsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomRequestsInput, UserUncheckedCreateWithoutCustomRequestsInput>
  }

  export type BidCreateWithoutRequestInput = {
    id: string
    price: number
    message: string
    created: Date | string
    status: string
    tailor: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutRequestInput = {
    id: string
    tailorId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type BidCreateOrConnectWithoutRequestInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput>
  }

  export type BidCreateManyRequestInputEnvelope = {
    data: BidCreateManyRequestInput | BidCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutRequestInput = {
    id: string
    content: string
    timestamp: Date | string
    read: boolean
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipient: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRequestInput = {
    id: string
    chatRoomId: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
  }

  export type ChatMessageCreateOrConnectWithoutRequestInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput>
  }

  export type ChatMessageCreateManyRequestInputEnvelope = {
    data: ChatMessageCreateManyRequestInput | ChatMessageCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAcceptedRequestsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAcceptedRequestsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAcceptedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcceptedRequestsInput, UserUncheckedCreateWithoutAcceptedRequestsInput>
  }

  export type NotificationCreateWithoutRequestInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutRequestInput = {
    id?: string
    userId: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutRequestInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput>
  }

  export type NotificationCreateManyRequestInputEnvelope = {
    data: NotificationCreateManyRequestInput | NotificationCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomRequestsInput = {
    update: XOR<UserUpdateWithoutCustomRequestsInput, UserUncheckedUpdateWithoutCustomRequestsInput>
    create: XOR<UserCreateWithoutCustomRequestsInput, UserUncheckedCreateWithoutCustomRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomRequestsInput, UserUncheckedUpdateWithoutCustomRequestsInput>
  }

  export type UserUpdateWithoutCustomRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BidUpsertWithWhereUniqueWithoutRequestInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutRequestInput, BidUncheckedUpdateWithoutRequestInput>
    create: XOR<BidCreateWithoutRequestInput, BidUncheckedCreateWithoutRequestInput>
  }

  export type BidUpdateWithWhereUniqueWithoutRequestInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutRequestInput, BidUncheckedUpdateWithoutRequestInput>
  }

  export type BidUpdateManyWithWhereWithoutRequestInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutRequestInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutRequestInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutRequestInput, ChatMessageUncheckedUpdateWithoutRequestInput>
    create: XOR<ChatMessageCreateWithoutRequestInput, ChatMessageUncheckedCreateWithoutRequestInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutRequestInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutRequestInput, ChatMessageUncheckedUpdateWithoutRequestInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutRequestInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutRequestInput>
  }

  export type UserUpsertWithoutAcceptedRequestsInput = {
    update: XOR<UserUpdateWithoutAcceptedRequestsInput, UserUncheckedUpdateWithoutAcceptedRequestsInput>
    create: XOR<UserCreateWithoutAcceptedRequestsInput, UserUncheckedCreateWithoutAcceptedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAcceptedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAcceptedRequestsInput, UserUncheckedUpdateWithoutAcceptedRequestsInput>
  }

  export type UserUpdateWithoutAcceptedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAcceptedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutRequestInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutRequestInput, NotificationUncheckedUpdateWithoutRequestInput>
    create: XOR<NotificationCreateWithoutRequestInput, NotificationUncheckedCreateWithoutRequestInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutRequestInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutRequestInput, NotificationUncheckedUpdateWithoutRequestInput>
  }

  export type NotificationUpdateManyWithWhereWithoutRequestInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutRequestInput>
  }

  export type CustomRequestCreateWithoutBidsInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    customer: UserCreateNestedOneWithoutCustomRequestsInput
    messages?: ChatMessageCreateNestedManyWithoutRequestInput
    acceptedTailor?: UserCreateNestedOneWithoutAcceptedRequestsInput
    notifications?: NotificationCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUncheckedCreateWithoutBidsInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRequestInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestCreateOrConnectWithoutBidsInput = {
    where: CustomRequestWhereUniqueInput
    create: XOR<CustomRequestCreateWithoutBidsInput, CustomRequestUncheckedCreateWithoutBidsInput>
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type CustomRequestUpsertWithoutBidsInput = {
    update: XOR<CustomRequestUpdateWithoutBidsInput, CustomRequestUncheckedUpdateWithoutBidsInput>
    create: XOR<CustomRequestCreateWithoutBidsInput, CustomRequestUncheckedCreateWithoutBidsInput>
    where?: CustomRequestWhereInput
  }

  export type CustomRequestUpdateToOneWithWhereWithoutBidsInput = {
    where?: CustomRequestWhereInput
    data: XOR<CustomRequestUpdateWithoutBidsInput, CustomRequestUncheckedUpdateWithoutBidsInput>
  }

  export type CustomRequestUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: UserUpdateOneRequiredWithoutCustomRequestsNestedInput
    messages?: ChatMessageUpdateManyWithoutRequestNestedInput
    acceptedTailor?: UserUpdateOneWithoutAcceptedRequestsNestedInput
    notifications?: NotificationUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatRoomsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type ChatMessageCreateWithoutChatRoomInput = {
    id: string
    content: string
    timestamp: Date | string
    read: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipient: UserCreateNestedOneWithoutReceivedMessagesInput
    request?: CustomRequestCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatRoomInput = {
    id: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateManyChatRoomInputEnvelope = {
    data: ChatMessageCreateManyChatRoomInput | ChatMessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatRoomsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatRoomsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    streamId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    participants?: UserCreateNestedManyWithoutChatRoomsInput
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id: string
    lastMessage?: string | null
    lastMessageTime?: Date | string | null
    unreadCount: number
    participants?: UserUncheckedCreateNestedManyWithoutChatRoomsInput
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type CustomRequestCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    customer: UserCreateNestedOneWithoutCustomRequestsInput
    bids?: BidCreateNestedManyWithoutRequestInput
    acceptedTailor?: UserCreateNestedOneWithoutAcceptedRequestsInput
    notifications?: NotificationCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestUncheckedCreateWithoutMessagesInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
    bids?: BidUncheckedCreateNestedManyWithoutRequestInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestCreateOrConnectWithoutMessagesInput = {
    where: CustomRequestWhereUniqueInput
    create: XOR<CustomRequestCreateWithoutMessagesInput, CustomRequestUncheckedCreateWithoutMessagesInput>
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    participants?: UserUpdateManyWithoutChatRoomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutChatRoomsNestedInput
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomRequestUpsertWithoutMessagesInput = {
    update: XOR<CustomRequestUpdateWithoutMessagesInput, CustomRequestUncheckedUpdateWithoutMessagesInput>
    create: XOR<CustomRequestCreateWithoutMessagesInput, CustomRequestUncheckedCreateWithoutMessagesInput>
    where?: CustomRequestWhereInput
  }

  export type CustomRequestUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CustomRequestWhereInput
    data: XOR<CustomRequestUpdateWithoutMessagesInput, CustomRequestUncheckedUpdateWithoutMessagesInput>
  }

  export type CustomRequestUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: UserUpdateOneRequiredWithoutCustomRequestsNestedInput
    bids?: BidUpdateManyWithoutRequestNestedInput
    acceptedTailor?: UserUpdateOneWithoutAcceptedRequestsNestedInput
    notifications?: NotificationUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUncheckedUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserCreateWithoutMeasurementsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeasurementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
  }

  export type UserUpsertWithoutMeasurementsInput = {
    update: XOR<UserUpdateWithoutMeasurementsInput, UserUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeasurementsInput, UserUncheckedUpdateWithoutMeasurementsInput>
  }

  export type UserUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatChannelsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatChannelsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput>
  }

  export type DesignCreateWithoutChatChannelsInput = {
    id?: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
    tailor: UserCreateNestedOneWithoutDesignsInput
  }

  export type DesignUncheckedCreateWithoutChatChannelsInput = {
    id?: string
    tailorId: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
  }

  export type DesignCreateOrConnectWithoutChatChannelsInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutChatChannelsInput, DesignUncheckedCreateWithoutChatChannelsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatChannelsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatChannelsInput, UserUncheckedUpdateWithoutChatChannelsInput>
    create: XOR<UserCreateWithoutChatChannelsInput, UserUncheckedCreateWithoutChatChannelsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatChannelsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatChannelsInput, UserUncheckedUpdateWithoutChatChannelsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatChannelsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatChannelsInput>
  }

  export type DesignUpsertWithoutChatChannelsInput = {
    update: XOR<DesignUpdateWithoutChatChannelsInput, DesignUncheckedUpdateWithoutChatChannelsInput>
    create: XOR<DesignCreateWithoutChatChannelsInput, DesignUncheckedCreateWithoutChatChannelsInput>
    where?: DesignWhereInput
  }

  export type DesignUpdateToOneWithWhereWithoutChatChannelsInput = {
    where?: DesignWhereInput
    data: XOR<DesignUpdateWithoutChatChannelsInput, DesignUncheckedUpdateWithoutChatChannelsInput>
  }

  export type DesignUpdateWithoutChatChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
    tailor?: UserUpdateOneRequiredWithoutDesignsNestedInput
  }

  export type DesignUncheckedUpdateWithoutChatChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestCreateNestedManyWithoutCustomerInput
    bids?: BidCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestCreateNestedManyWithoutAcceptedTailorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.UserRole
    password: string
    avatarUrl?: string | null
    bio?: string | null
    location?: string | null
    streamId?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    designs?: DesignUncheckedCreateNestedManyWithoutTailorInput
    customRequests?: CustomRequestUncheckedCreateNestedManyWithoutCustomerInput
    bids?: BidUncheckedCreateNestedManyWithoutTailorInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutParticipantsInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutCustomerInput
    chatChannels?: ChatChannelUncheckedCreateNestedManyWithoutParticipantsInput
    acceptedRequests?: CustomRequestUncheckedCreateNestedManyWithoutAcceptedTailorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type CustomRequestCreateWithoutNotificationsInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    customer: UserCreateNestedOneWithoutCustomRequestsInput
    bids?: BidCreateNestedManyWithoutRequestInput
    messages?: ChatMessageCreateNestedManyWithoutRequestInput
    acceptedTailor?: UserCreateNestedOneWithoutAcceptedRequestsInput
  }

  export type CustomRequestUncheckedCreateWithoutNotificationsInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
    bids?: BidUncheckedCreateNestedManyWithoutRequestInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomRequestCreateOrConnectWithoutNotificationsInput = {
    where: CustomRequestWhereUniqueInput
    create: XOR<CustomRequestCreateWithoutNotificationsInput, CustomRequestUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
  }

  export type CustomRequestUpsertWithoutNotificationsInput = {
    update: XOR<CustomRequestUpdateWithoutNotificationsInput, CustomRequestUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CustomRequestCreateWithoutNotificationsInput, CustomRequestUncheckedCreateWithoutNotificationsInput>
    where?: CustomRequestWhereInput
  }

  export type CustomRequestUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CustomRequestWhereInput
    data: XOR<CustomRequestUpdateWithoutNotificationsInput, CustomRequestUncheckedUpdateWithoutNotificationsInput>
  }

  export type CustomRequestUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: UserUpdateOneRequiredWithoutCustomRequestsNestedInput
    bids?: BidUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUpdateManyWithoutRequestNestedInput
    acceptedTailor?: UserUpdateOneWithoutAcceptedRequestsNestedInput
  }

  export type CustomRequestUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUncheckedUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DesignCreateManyTailorInput = {
    id?: string
    title: string
    description: string
    price: number
    imageUrls?: DesignCreateimageUrlsInput | string[]
    category: $Enums.DesignCategory
    fabricType: string
    created?: Date | string
    availableSizes?: DesignCreateavailableSizesInput | string[]
    tags?: DesignCreatetagsInput | string[]
  }

  export type CustomRequestCreateManyCustomerInput = {
    id?: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
    acceptedTailorId?: string | null
  }

  export type BidCreateManyTailorInput = {
    id: string
    requestId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type ChatMessageCreateManySenderInput = {
    id: string
    chatRoomId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type ChatMessageCreateManyRecipientInput = {
    id: string
    chatRoomId: string
    senderId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type MeasurementCreateManyCustomerInput = {
    id: string
    chest: number
    waist: number
    hip: number
    inseam: number
    shoulder: number
    arm: number
    height: number
    weight: number
    neck: number
    thigh?: number | null
    calf?: number | null
    bicep?: number | null
    forearm?: number | null
    wrist?: number | null
    ankle?: number | null
    aiProcessed: boolean
    created: Date | string
    updated: Date | string
  }

  export type CustomRequestCreateManyAcceptedTailorInput = {
    id?: string
    customerId: string
    title: string
    description: string
    proposedPrice: number
    status: string
    created: Date | string
    deadline?: Date | string | null
    imageUrl?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    requestId?: string | null
  }

  export type DesignUpdateWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
    chatChannels?: ChatChannelUpdateManyWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateManyWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrls?: DesignUpdateimageUrlsInput | string[]
    category?: EnumDesignCategoryFieldUpdateOperationsInput | $Enums.DesignCategory
    fabricType?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSizes?: DesignUpdateavailableSizesInput | string[]
    tags?: DesignUpdatetagsInput | string[]
  }

  export type CustomRequestUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUpdateManyWithoutRequestNestedInput
    acceptedTailor?: UserUpdateOneWithoutAcceptedRequestsNestedInput
    notifications?: NotificationUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUncheckedUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTailorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BidUpdateWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    request?: CustomRequestUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BidUncheckedUpdateManyWithoutTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    messages?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    messages?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    request?: CustomRequestUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    request?: CustomRequestUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    chest?: FloatFieldUpdateOperationsInput | number
    waist?: FloatFieldUpdateOperationsInput | number
    hip?: FloatFieldUpdateOperationsInput | number
    inseam?: FloatFieldUpdateOperationsInput | number
    shoulder?: FloatFieldUpdateOperationsInput | number
    arm?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    neck?: FloatFieldUpdateOperationsInput | number
    thigh?: NullableFloatFieldUpdateOperationsInput | number | null
    calf?: NullableFloatFieldUpdateOperationsInput | number | null
    bicep?: NullableFloatFieldUpdateOperationsInput | number | null
    forearm?: NullableFloatFieldUpdateOperationsInput | number | null
    wrist?: NullableFloatFieldUpdateOperationsInput | number | null
    ankle?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessed?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatChannelUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneWithoutChatChannelsNestedInput
  }

  export type ChatChannelUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    designId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatChannelUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    designId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomRequestUpdateWithoutAcceptedTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: UserUpdateOneRequiredWithoutCustomRequestsNestedInput
    bids?: BidUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateWithoutAcceptedTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bids?: BidUncheckedUpdateManyWithoutRequestNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutRequestNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CustomRequestUncheckedUpdateManyWithoutAcceptedTailorInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    proposedPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomRequestUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatChannelCreateManyDesignInput = {
    id?: string
    streamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatChannelUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutChatChannelsNestedInput
  }

  export type ChatChannelUncheckedUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutChatChannelsNestedInput
  }

  export type ChatChannelUncheckedUpdateManyWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyRequestInput = {
    id: string
    tailorId: string
    price: number
    message: string
    created: Date | string
    status: string
  }

  export type ChatMessageCreateManyRequestInput = {
    id: string
    chatRoomId: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
  }

  export type NotificationCreateManyRequestInput = {
    id?: string
    userId: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type BidUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tailor?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BidUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailorId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatRoomInput = {
    id: string
    senderId: string
    recipientId: string
    content: string
    timestamp: Date | string
    read: boolean
    requestId?: string | null
  }

  export type UserUpdateWithoutChatRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    chatChannels?: ChatChannelUncheckedUpdateManyWithoutParticipantsNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    request?: CustomRequestUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutChatChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUpdateManyWithoutCustomerNestedInput
    bids?: BidUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUpdateManyWithoutCustomerNestedInput
    acceptedRequests?: CustomRequestUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    designs?: DesignUncheckedUpdateManyWithoutTailorNestedInput
    customRequests?: CustomRequestUncheckedUpdateManyWithoutCustomerNestedInput
    bids?: BidUncheckedUpdateManyWithoutTailorNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutParticipantsNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutCustomerNestedInput
    acceptedRequests?: CustomRequestUncheckedUpdateManyWithoutAcceptedTailorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}