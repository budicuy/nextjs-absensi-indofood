
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
 * Model Departemen
 * 
 */
export type Departemen = $Result.DefaultSelection<Prisma.$DepartemenPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model AlasanLembur
 * 
 */
export type AlasanLembur = $Result.DefaultSelection<Prisma.$AlasanLemburPayload>
/**
 * Model Karyawan
 * 
 */
export type Karyawan = $Result.DefaultSelection<Prisma.$KaryawanPayload>
/**
 * Model JamKerja
 * 
 */
export type JamKerja = $Result.DefaultSelection<Prisma.$JamKerjaPayload>
/**
 * Model GajiPokok
 * 
 */
export type GajiPokok = $Result.DefaultSelection<Prisma.$GajiPokokPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  HRD: 'HRD',
  KARYAWAN: 'KARYAWAN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.departemen`: Exposes CRUD operations for the **Departemen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departemen
    * const departemen = await prisma.departemen.findMany()
    * ```
    */
  get departemen(): Prisma.DepartemenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alasanLembur`: Exposes CRUD operations for the **AlasanLembur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlasanLemburs
    * const alasanLemburs = await prisma.alasanLembur.findMany()
    * ```
    */
  get alasanLembur(): Prisma.AlasanLemburDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.karyawan`: Exposes CRUD operations for the **Karyawan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karyawans
    * const karyawans = await prisma.karyawan.findMany()
    * ```
    */
  get karyawan(): Prisma.KaryawanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jamKerja`: Exposes CRUD operations for the **JamKerja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JamKerjas
    * const jamKerjas = await prisma.jamKerja.findMany()
    * ```
    */
  get jamKerja(): Prisma.JamKerjaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gajiPokok`: Exposes CRUD operations for the **GajiPokok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GajiPokoks
    * const gajiPokoks = await prisma.gajiPokok.findMany()
    * ```
    */
  get gajiPokok(): Prisma.GajiPokokDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Departemen: 'Departemen',
    Vendor: 'Vendor',
    AlasanLembur: 'AlasanLembur',
    Karyawan: 'Karyawan',
    JamKerja: 'JamKerja',
    GajiPokok: 'GajiPokok'
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
      modelProps: "user" | "departemen" | "vendor" | "alasanLembur" | "karyawan" | "jamKerja" | "gajiPokok"
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
      Departemen: {
        payload: Prisma.$DepartemenPayload<ExtArgs>
        fields: Prisma.DepartemenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartemenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartemenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findFirst: {
            args: Prisma.DepartemenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartemenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findMany: {
            args: Prisma.DepartemenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          create: {
            args: Prisma.DepartemenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          createMany: {
            args: Prisma.DepartemenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartemenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          update: {
            args: Prisma.DepartemenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          deleteMany: {
            args: Prisma.DepartemenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartemenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartemenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          aggregate: {
            args: Prisma.DepartemenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartemen>
          }
          groupBy: {
            args: Prisma.DepartemenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartemenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartemenCountArgs<ExtArgs>
            result: $Utils.Optional<DepartemenCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      AlasanLembur: {
        payload: Prisma.$AlasanLemburPayload<ExtArgs>
        fields: Prisma.AlasanLemburFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlasanLemburFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlasanLemburFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          findFirst: {
            args: Prisma.AlasanLemburFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlasanLemburFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          findMany: {
            args: Prisma.AlasanLemburFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>[]
          }
          create: {
            args: Prisma.AlasanLemburCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          createMany: {
            args: Prisma.AlasanLemburCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlasanLemburDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          update: {
            args: Prisma.AlasanLemburUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          deleteMany: {
            args: Prisma.AlasanLemburDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlasanLemburUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlasanLemburUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlasanLemburPayload>
          }
          aggregate: {
            args: Prisma.AlasanLemburAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlasanLembur>
          }
          groupBy: {
            args: Prisma.AlasanLemburGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlasanLemburGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlasanLemburCountArgs<ExtArgs>
            result: $Utils.Optional<AlasanLemburCountAggregateOutputType> | number
          }
        }
      }
      Karyawan: {
        payload: Prisma.$KaryawanPayload<ExtArgs>
        fields: Prisma.KaryawanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KaryawanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KaryawanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findFirst: {
            args: Prisma.KaryawanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KaryawanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findMany: {
            args: Prisma.KaryawanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>[]
          }
          create: {
            args: Prisma.KaryawanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          createMany: {
            args: Prisma.KaryawanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KaryawanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          update: {
            args: Prisma.KaryawanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          deleteMany: {
            args: Prisma.KaryawanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KaryawanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KaryawanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          aggregate: {
            args: Prisma.KaryawanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKaryawan>
          }
          groupBy: {
            args: Prisma.KaryawanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KaryawanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KaryawanCountArgs<ExtArgs>
            result: $Utils.Optional<KaryawanCountAggregateOutputType> | number
          }
        }
      }
      JamKerja: {
        payload: Prisma.$JamKerjaPayload<ExtArgs>
        fields: Prisma.JamKerjaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JamKerjaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JamKerjaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          findFirst: {
            args: Prisma.JamKerjaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JamKerjaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          findMany: {
            args: Prisma.JamKerjaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>[]
          }
          create: {
            args: Prisma.JamKerjaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          createMany: {
            args: Prisma.JamKerjaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JamKerjaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          update: {
            args: Prisma.JamKerjaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          deleteMany: {
            args: Prisma.JamKerjaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JamKerjaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JamKerjaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JamKerjaPayload>
          }
          aggregate: {
            args: Prisma.JamKerjaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJamKerja>
          }
          groupBy: {
            args: Prisma.JamKerjaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JamKerjaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JamKerjaCountArgs<ExtArgs>
            result: $Utils.Optional<JamKerjaCountAggregateOutputType> | number
          }
        }
      }
      GajiPokok: {
        payload: Prisma.$GajiPokokPayload<ExtArgs>
        fields: Prisma.GajiPokokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GajiPokokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GajiPokokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          findFirst: {
            args: Prisma.GajiPokokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GajiPokokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          findMany: {
            args: Prisma.GajiPokokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>[]
          }
          create: {
            args: Prisma.GajiPokokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          createMany: {
            args: Prisma.GajiPokokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GajiPokokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          update: {
            args: Prisma.GajiPokokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          deleteMany: {
            args: Prisma.GajiPokokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GajiPokokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GajiPokokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GajiPokokPayload>
          }
          aggregate: {
            args: Prisma.GajiPokokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGajiPokok>
          }
          groupBy: {
            args: Prisma.GajiPokokGroupByArgs<ExtArgs>
            result: $Utils.Optional<GajiPokokGroupByOutputType>[]
          }
          count: {
            args: Prisma.GajiPokokCountArgs<ExtArgs>
            result: $Utils.Optional<GajiPokokCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    departemen?: DepartemenOmit
    vendor?: VendorOmit
    alasanLembur?: AlasanLemburOmit
    karyawan?: KaryawanOmit
    jamKerja?: JamKerjaOmit
    gajiPokok?: GajiPokokOmit
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
   * Count Type DepartemenCountOutputType
   */

  export type DepartemenCountOutputType = {
    Karyawan: number
  }

  export type DepartemenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | DepartemenCountOutputTypeCountKaryawanArgs
  }

  // Custom InputTypes
  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartemenCountOutputType
     */
    select?: DepartemenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeCountKaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    Karyawan: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | VendorCountOutputTypeCountKaryawanArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountKaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
  }


  /**
   * Count Type KaryawanCountOutputType
   */

  export type KaryawanCountOutputType = {
    GajiPokok: number
  }

  export type KaryawanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GajiPokok?: boolean | KaryawanCountOutputTypeCountGajiPokokArgs
  }

  // Custom InputTypes
  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KaryawanCountOutputType
     */
    select?: KaryawanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountGajiPokokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GajiPokokWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.Role
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }


  /**
   * Model Departemen
   */

  export type AggregateDepartemen = {
    _count: DepartemenCountAggregateOutputType | null
    _avg: DepartemenAvgAggregateOutputType | null
    _sum: DepartemenSumAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  export type DepartemenAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartemenSumAggregateOutputType = {
    id: number | null
  }

  export type DepartemenMinAggregateOutputType = {
    id: number | null
    slugDepartemen: string | null
    namaDepartemen: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartemenMaxAggregateOutputType = {
    id: number | null
    slugDepartemen: string | null
    namaDepartemen: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartemenCountAggregateOutputType = {
    id: number
    slugDepartemen: number
    namaDepartemen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartemenAvgAggregateInputType = {
    id?: true
  }

  export type DepartemenSumAggregateInputType = {
    id?: true
  }

  export type DepartemenMinAggregateInputType = {
    id?: true
    slugDepartemen?: true
    namaDepartemen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartemenMaxAggregateInputType = {
    id?: true
    slugDepartemen?: true
    namaDepartemen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartemenCountAggregateInputType = {
    id?: true
    slugDepartemen?: true
    namaDepartemen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartemenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to aggregate.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departemen
    **/
    _count?: true | DepartemenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartemenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartemenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartemenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartemenMaxAggregateInputType
  }

  export type GetDepartemenAggregateType<T extends DepartemenAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartemen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartemen[P]>
      : GetScalarType<T[P], AggregateDepartemen[P]>
  }




  export type DepartemenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartemenWhereInput
    orderBy?: DepartemenOrderByWithAggregationInput | DepartemenOrderByWithAggregationInput[]
    by: DepartemenScalarFieldEnum[] | DepartemenScalarFieldEnum
    having?: DepartemenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartemenCountAggregateInputType | true
    _avg?: DepartemenAvgAggregateInputType
    _sum?: DepartemenSumAggregateInputType
    _min?: DepartemenMinAggregateInputType
    _max?: DepartemenMaxAggregateInputType
  }

  export type DepartemenGroupByOutputType = {
    id: number
    slugDepartemen: string
    namaDepartemen: string
    createdAt: Date
    updatedAt: Date
    _count: DepartemenCountAggregateOutputType | null
    _avg: DepartemenAvgAggregateOutputType | null
    _sum: DepartemenSumAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  type GetDepartemenGroupByPayload<T extends DepartemenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartemenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartemenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
            : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
        }
      >
    >


  export type DepartemenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slugDepartemen?: boolean
    namaDepartemen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Karyawan?: boolean | Departemen$KaryawanArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departemen"]>



  export type DepartemenSelectScalar = {
    id?: boolean
    slugDepartemen?: boolean
    namaDepartemen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartemenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slugDepartemen" | "namaDepartemen" | "createdAt" | "updatedAt", ExtArgs["result"]["departemen"]>
  export type DepartemenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | Departemen$KaryawanArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartemenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departemen"
    objects: {
      Karyawan: Prisma.$KaryawanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slugDepartemen: string
      namaDepartemen: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departemen"]>
    composites: {}
  }

  type DepartemenGetPayload<S extends boolean | null | undefined | DepartemenDefaultArgs> = $Result.GetResult<Prisma.$DepartemenPayload, S>

  type DepartemenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartemenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartemenCountAggregateInputType | true
    }

  export interface DepartemenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departemen'], meta: { name: 'Departemen' } }
    /**
     * Find zero or one Departemen that matches the filter.
     * @param {DepartemenFindUniqueArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartemenFindUniqueArgs>(args: SelectSubset<T, DepartemenFindUniqueArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departemen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartemenFindUniqueOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartemenFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartemenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartemenFindFirstArgs>(args?: SelectSubset<T, DepartemenFindFirstArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartemenFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartemenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departemen
     * const departemen = await prisma.departemen.findMany()
     * 
     * // Get first 10 Departemen
     * const departemen = await prisma.departemen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departemenWithIdOnly = await prisma.departemen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartemenFindManyArgs>(args?: SelectSubset<T, DepartemenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departemen.
     * @param {DepartemenCreateArgs} args - Arguments to create a Departemen.
     * @example
     * // Create one Departemen
     * const Departemen = await prisma.departemen.create({
     *   data: {
     *     // ... data to create a Departemen
     *   }
     * })
     * 
     */
    create<T extends DepartemenCreateArgs>(args: SelectSubset<T, DepartemenCreateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departemen.
     * @param {DepartemenCreateManyArgs} args - Arguments to create many Departemen.
     * @example
     * // Create many Departemen
     * const departemen = await prisma.departemen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartemenCreateManyArgs>(args?: SelectSubset<T, DepartemenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departemen.
     * @param {DepartemenDeleteArgs} args - Arguments to delete one Departemen.
     * @example
     * // Delete one Departemen
     * const Departemen = await prisma.departemen.delete({
     *   where: {
     *     // ... filter to delete one Departemen
     *   }
     * })
     * 
     */
    delete<T extends DepartemenDeleteArgs>(args: SelectSubset<T, DepartemenDeleteArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departemen.
     * @param {DepartemenUpdateArgs} args - Arguments to update one Departemen.
     * @example
     * // Update one Departemen
     * const departemen = await prisma.departemen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartemenUpdateArgs>(args: SelectSubset<T, DepartemenUpdateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departemen.
     * @param {DepartemenDeleteManyArgs} args - Arguments to filter Departemen to delete.
     * @example
     * // Delete a few Departemen
     * const { count } = await prisma.departemen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartemenDeleteManyArgs>(args?: SelectSubset<T, DepartemenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departemen
     * const departemen = await prisma.departemen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartemenUpdateManyArgs>(args: SelectSubset<T, DepartemenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departemen.
     * @param {DepartemenUpsertArgs} args - Arguments to update or create a Departemen.
     * @example
     * // Update or create a Departemen
     * const departemen = await prisma.departemen.upsert({
     *   create: {
     *     // ... data to create a Departemen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departemen we want to update
     *   }
     * })
     */
    upsert<T extends DepartemenUpsertArgs>(args: SelectSubset<T, DepartemenUpsertArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenCountArgs} args - Arguments to filter Departemen to count.
     * @example
     * // Count the number of Departemen
     * const count = await prisma.departemen.count({
     *   where: {
     *     // ... the filter for the Departemen we want to count
     *   }
     * })
    **/
    count<T extends DepartemenCountArgs>(
      args?: Subset<T, DepartemenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartemenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartemenAggregateArgs>(args: Subset<T, DepartemenAggregateArgs>): Prisma.PrismaPromise<GetDepartemenAggregateType<T>>

    /**
     * Group by Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenGroupByArgs} args - Group by arguments.
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
      T extends DepartemenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartemenGroupByArgs['orderBy'] }
        : { orderBy?: DepartemenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartemenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartemenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departemen model
   */
  readonly fields: DepartemenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departemen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartemenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Karyawan<T extends Departemen$KaryawanArgs<ExtArgs> = {}>(args?: Subset<T, Departemen$KaryawanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departemen model
   */
  interface DepartemenFieldRefs {
    readonly id: FieldRef<"Departemen", 'Int'>
    readonly slugDepartemen: FieldRef<"Departemen", 'String'>
    readonly namaDepartemen: FieldRef<"Departemen", 'String'>
    readonly createdAt: FieldRef<"Departemen", 'DateTime'>
    readonly updatedAt: FieldRef<"Departemen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departemen findUnique
   */
  export type DepartemenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findUniqueOrThrow
   */
  export type DepartemenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findFirst
   */
  export type DepartemenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findFirstOrThrow
   */
  export type DepartemenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findMany
   */
  export type DepartemenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen create
   */
  export type DepartemenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to create a Departemen.
     */
    data: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
  }

  /**
   * Departemen createMany
   */
  export type DepartemenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departemen.
     */
    data: DepartemenCreateManyInput | DepartemenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departemen update
   */
  export type DepartemenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to update a Departemen.
     */
    data: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
    /**
     * Choose, which Departemen to update.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen updateMany
   */
  export type DepartemenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departemen.
     */
    data: XOR<DepartemenUpdateManyMutationInput, DepartemenUncheckedUpdateManyInput>
    /**
     * Filter which Departemen to update
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to update.
     */
    limit?: number
  }

  /**
   * Departemen upsert
   */
  export type DepartemenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The filter to search for the Departemen to update in case it exists.
     */
    where: DepartemenWhereUniqueInput
    /**
     * In case the Departemen found by the `where` argument doesn't exist, create a new Departemen with this data.
     */
    create: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
    /**
     * In case the Departemen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
  }

  /**
   * Departemen delete
   */
  export type DepartemenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter which Departemen to delete.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen deleteMany
   */
  export type DepartemenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to delete
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to delete.
     */
    limit?: number
  }

  /**
   * Departemen.Karyawan
   */
  export type Departemen$KaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    cursor?: KaryawanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Departemen without action
   */
  export type DepartemenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    slugVendor: string | null
    namaVendor: string | null
    alamat: string | null
    noTelp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    slugVendor: string | null
    namaVendor: string | null
    alamat: string | null
    noTelp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    slugVendor: number
    namaVendor: number
    alamat: number
    noTelp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    slugVendor?: true
    namaVendor?: true
    alamat?: true
    noTelp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    slugVendor?: true
    namaVendor?: true
    alamat?: true
    noTelp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    slugVendor?: true
    namaVendor?: true
    alamat?: true
    noTelp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: number
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slugVendor?: boolean
    namaVendor?: boolean
    alamat?: boolean
    noTelp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Karyawan?: boolean | Vendor$KaryawanArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    slugVendor?: boolean
    namaVendor?: boolean
    alamat?: boolean
    noTelp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slugVendor" | "namaVendor" | "alamat" | "noTelp" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | Vendor$KaryawanArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      Karyawan: Prisma.$KaryawanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slugVendor: string
      namaVendor: string
      alamat: string
      noTelp: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Karyawan<T extends Vendor$KaryawanArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$KaryawanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'Int'>
    readonly slugVendor: FieldRef<"Vendor", 'String'>
    readonly namaVendor: FieldRef<"Vendor", 'String'>
    readonly alamat: FieldRef<"Vendor", 'String'>
    readonly noTelp: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.Karyawan
   */
  export type Vendor$KaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    cursor?: KaryawanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model AlasanLembur
   */

  export type AggregateAlasanLembur = {
    _count: AlasanLemburCountAggregateOutputType | null
    _avg: AlasanLemburAvgAggregateOutputType | null
    _sum: AlasanLemburSumAggregateOutputType | null
    _min: AlasanLemburMinAggregateOutputType | null
    _max: AlasanLemburMaxAggregateOutputType | null
  }

  export type AlasanLemburAvgAggregateOutputType = {
    id: number | null
  }

  export type AlasanLemburSumAggregateOutputType = {
    id: number | null
  }

  export type AlasanLemburMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlasanLemburMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlasanLemburCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlasanLemburAvgAggregateInputType = {
    id?: true
  }

  export type AlasanLemburSumAggregateInputType = {
    id?: true
  }

  export type AlasanLemburMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlasanLemburMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlasanLemburCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlasanLemburAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlasanLembur to aggregate.
     */
    where?: AlasanLemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlasanLemburs to fetch.
     */
    orderBy?: AlasanLemburOrderByWithRelationInput | AlasanLemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlasanLemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlasanLemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlasanLemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlasanLemburs
    **/
    _count?: true | AlasanLemburCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlasanLemburAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlasanLemburSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlasanLemburMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlasanLemburMaxAggregateInputType
  }

  export type GetAlasanLemburAggregateType<T extends AlasanLemburAggregateArgs> = {
        [P in keyof T & keyof AggregateAlasanLembur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlasanLembur[P]>
      : GetScalarType<T[P], AggregateAlasanLembur[P]>
  }




  export type AlasanLemburGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlasanLemburWhereInput
    orderBy?: AlasanLemburOrderByWithAggregationInput | AlasanLemburOrderByWithAggregationInput[]
    by: AlasanLemburScalarFieldEnum[] | AlasanLemburScalarFieldEnum
    having?: AlasanLemburScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlasanLemburCountAggregateInputType | true
    _avg?: AlasanLemburAvgAggregateInputType
    _sum?: AlasanLemburSumAggregateInputType
    _min?: AlasanLemburMinAggregateInputType
    _max?: AlasanLemburMaxAggregateInputType
  }

  export type AlasanLemburGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: AlasanLemburCountAggregateOutputType | null
    _avg: AlasanLemburAvgAggregateOutputType | null
    _sum: AlasanLemburSumAggregateOutputType | null
    _min: AlasanLemburMinAggregateOutputType | null
    _max: AlasanLemburMaxAggregateOutputType | null
  }

  type GetAlasanLemburGroupByPayload<T extends AlasanLemburGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlasanLemburGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlasanLemburGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlasanLemburGroupByOutputType[P]>
            : GetScalarType<T[P], AlasanLemburGroupByOutputType[P]>
        }
      >
    >


  export type AlasanLemburSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alasanLembur"]>



  export type AlasanLemburSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlasanLemburOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["alasanLembur"]>

  export type $AlasanLemburPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlasanLembur"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alasanLembur"]>
    composites: {}
  }

  type AlasanLemburGetPayload<S extends boolean | null | undefined | AlasanLemburDefaultArgs> = $Result.GetResult<Prisma.$AlasanLemburPayload, S>

  type AlasanLemburCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlasanLemburFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlasanLemburCountAggregateInputType | true
    }

  export interface AlasanLemburDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlasanLembur'], meta: { name: 'AlasanLembur' } }
    /**
     * Find zero or one AlasanLembur that matches the filter.
     * @param {AlasanLemburFindUniqueArgs} args - Arguments to find a AlasanLembur
     * @example
     * // Get one AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlasanLemburFindUniqueArgs>(args: SelectSubset<T, AlasanLemburFindUniqueArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlasanLembur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlasanLemburFindUniqueOrThrowArgs} args - Arguments to find a AlasanLembur
     * @example
     * // Get one AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlasanLemburFindUniqueOrThrowArgs>(args: SelectSubset<T, AlasanLemburFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlasanLembur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburFindFirstArgs} args - Arguments to find a AlasanLembur
     * @example
     * // Get one AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlasanLemburFindFirstArgs>(args?: SelectSubset<T, AlasanLemburFindFirstArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlasanLembur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburFindFirstOrThrowArgs} args - Arguments to find a AlasanLembur
     * @example
     * // Get one AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlasanLemburFindFirstOrThrowArgs>(args?: SelectSubset<T, AlasanLemburFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlasanLemburs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlasanLemburs
     * const alasanLemburs = await prisma.alasanLembur.findMany()
     * 
     * // Get first 10 AlasanLemburs
     * const alasanLemburs = await prisma.alasanLembur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alasanLemburWithIdOnly = await prisma.alasanLembur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlasanLemburFindManyArgs>(args?: SelectSubset<T, AlasanLemburFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlasanLembur.
     * @param {AlasanLemburCreateArgs} args - Arguments to create a AlasanLembur.
     * @example
     * // Create one AlasanLembur
     * const AlasanLembur = await prisma.alasanLembur.create({
     *   data: {
     *     // ... data to create a AlasanLembur
     *   }
     * })
     * 
     */
    create<T extends AlasanLemburCreateArgs>(args: SelectSubset<T, AlasanLemburCreateArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlasanLemburs.
     * @param {AlasanLemburCreateManyArgs} args - Arguments to create many AlasanLemburs.
     * @example
     * // Create many AlasanLemburs
     * const alasanLembur = await prisma.alasanLembur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlasanLemburCreateManyArgs>(args?: SelectSubset<T, AlasanLemburCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlasanLembur.
     * @param {AlasanLemburDeleteArgs} args - Arguments to delete one AlasanLembur.
     * @example
     * // Delete one AlasanLembur
     * const AlasanLembur = await prisma.alasanLembur.delete({
     *   where: {
     *     // ... filter to delete one AlasanLembur
     *   }
     * })
     * 
     */
    delete<T extends AlasanLemburDeleteArgs>(args: SelectSubset<T, AlasanLemburDeleteArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlasanLembur.
     * @param {AlasanLemburUpdateArgs} args - Arguments to update one AlasanLembur.
     * @example
     * // Update one AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlasanLemburUpdateArgs>(args: SelectSubset<T, AlasanLemburUpdateArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlasanLemburs.
     * @param {AlasanLemburDeleteManyArgs} args - Arguments to filter AlasanLemburs to delete.
     * @example
     * // Delete a few AlasanLemburs
     * const { count } = await prisma.alasanLembur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlasanLemburDeleteManyArgs>(args?: SelectSubset<T, AlasanLemburDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlasanLemburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlasanLemburs
     * const alasanLembur = await prisma.alasanLembur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlasanLemburUpdateManyArgs>(args: SelectSubset<T, AlasanLemburUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlasanLembur.
     * @param {AlasanLemburUpsertArgs} args - Arguments to update or create a AlasanLembur.
     * @example
     * // Update or create a AlasanLembur
     * const alasanLembur = await prisma.alasanLembur.upsert({
     *   create: {
     *     // ... data to create a AlasanLembur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlasanLembur we want to update
     *   }
     * })
     */
    upsert<T extends AlasanLemburUpsertArgs>(args: SelectSubset<T, AlasanLemburUpsertArgs<ExtArgs>>): Prisma__AlasanLemburClient<$Result.GetResult<Prisma.$AlasanLemburPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlasanLemburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburCountArgs} args - Arguments to filter AlasanLemburs to count.
     * @example
     * // Count the number of AlasanLemburs
     * const count = await prisma.alasanLembur.count({
     *   where: {
     *     // ... the filter for the AlasanLemburs we want to count
     *   }
     * })
    **/
    count<T extends AlasanLemburCountArgs>(
      args?: Subset<T, AlasanLemburCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlasanLemburCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlasanLembur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlasanLemburAggregateArgs>(args: Subset<T, AlasanLemburAggregateArgs>): Prisma.PrismaPromise<GetAlasanLemburAggregateType<T>>

    /**
     * Group by AlasanLembur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlasanLemburGroupByArgs} args - Group by arguments.
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
      T extends AlasanLemburGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlasanLemburGroupByArgs['orderBy'] }
        : { orderBy?: AlasanLemburGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlasanLemburGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlasanLemburGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlasanLembur model
   */
  readonly fields: AlasanLemburFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlasanLembur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlasanLemburClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AlasanLembur model
   */
  interface AlasanLemburFieldRefs {
    readonly id: FieldRef<"AlasanLembur", 'Int'>
    readonly description: FieldRef<"AlasanLembur", 'String'>
    readonly createdAt: FieldRef<"AlasanLembur", 'DateTime'>
    readonly updatedAt: FieldRef<"AlasanLembur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlasanLembur findUnique
   */
  export type AlasanLemburFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter, which AlasanLembur to fetch.
     */
    where: AlasanLemburWhereUniqueInput
  }

  /**
   * AlasanLembur findUniqueOrThrow
   */
  export type AlasanLemburFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter, which AlasanLembur to fetch.
     */
    where: AlasanLemburWhereUniqueInput
  }

  /**
   * AlasanLembur findFirst
   */
  export type AlasanLemburFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter, which AlasanLembur to fetch.
     */
    where?: AlasanLemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlasanLemburs to fetch.
     */
    orderBy?: AlasanLemburOrderByWithRelationInput | AlasanLemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlasanLemburs.
     */
    cursor?: AlasanLemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlasanLemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlasanLemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlasanLemburs.
     */
    distinct?: AlasanLemburScalarFieldEnum | AlasanLemburScalarFieldEnum[]
  }

  /**
   * AlasanLembur findFirstOrThrow
   */
  export type AlasanLemburFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter, which AlasanLembur to fetch.
     */
    where?: AlasanLemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlasanLemburs to fetch.
     */
    orderBy?: AlasanLemburOrderByWithRelationInput | AlasanLemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlasanLemburs.
     */
    cursor?: AlasanLemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlasanLemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlasanLemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlasanLemburs.
     */
    distinct?: AlasanLemburScalarFieldEnum | AlasanLemburScalarFieldEnum[]
  }

  /**
   * AlasanLembur findMany
   */
  export type AlasanLemburFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter, which AlasanLemburs to fetch.
     */
    where?: AlasanLemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlasanLemburs to fetch.
     */
    orderBy?: AlasanLemburOrderByWithRelationInput | AlasanLemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlasanLemburs.
     */
    cursor?: AlasanLemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlasanLemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlasanLemburs.
     */
    skip?: number
    distinct?: AlasanLemburScalarFieldEnum | AlasanLemburScalarFieldEnum[]
  }

  /**
   * AlasanLembur create
   */
  export type AlasanLemburCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * The data needed to create a AlasanLembur.
     */
    data: XOR<AlasanLemburCreateInput, AlasanLemburUncheckedCreateInput>
  }

  /**
   * AlasanLembur createMany
   */
  export type AlasanLemburCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlasanLemburs.
     */
    data: AlasanLemburCreateManyInput | AlasanLemburCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlasanLembur update
   */
  export type AlasanLemburUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * The data needed to update a AlasanLembur.
     */
    data: XOR<AlasanLemburUpdateInput, AlasanLemburUncheckedUpdateInput>
    /**
     * Choose, which AlasanLembur to update.
     */
    where: AlasanLemburWhereUniqueInput
  }

  /**
   * AlasanLembur updateMany
   */
  export type AlasanLemburUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlasanLemburs.
     */
    data: XOR<AlasanLemburUpdateManyMutationInput, AlasanLemburUncheckedUpdateManyInput>
    /**
     * Filter which AlasanLemburs to update
     */
    where?: AlasanLemburWhereInput
    /**
     * Limit how many AlasanLemburs to update.
     */
    limit?: number
  }

  /**
   * AlasanLembur upsert
   */
  export type AlasanLemburUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * The filter to search for the AlasanLembur to update in case it exists.
     */
    where: AlasanLemburWhereUniqueInput
    /**
     * In case the AlasanLembur found by the `where` argument doesn't exist, create a new AlasanLembur with this data.
     */
    create: XOR<AlasanLemburCreateInput, AlasanLemburUncheckedCreateInput>
    /**
     * In case the AlasanLembur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlasanLemburUpdateInput, AlasanLemburUncheckedUpdateInput>
  }

  /**
   * AlasanLembur delete
   */
  export type AlasanLemburDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
    /**
     * Filter which AlasanLembur to delete.
     */
    where: AlasanLemburWhereUniqueInput
  }

  /**
   * AlasanLembur deleteMany
   */
  export type AlasanLemburDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlasanLemburs to delete
     */
    where?: AlasanLemburWhereInput
    /**
     * Limit how many AlasanLemburs to delete.
     */
    limit?: number
  }

  /**
   * AlasanLembur without action
   */
  export type AlasanLemburDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlasanLembur
     */
    select?: AlasanLemburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlasanLembur
     */
    omit?: AlasanLemburOmit<ExtArgs> | null
  }


  /**
   * Model Karyawan
   */

  export type AggregateKaryawan = {
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  export type KaryawanAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
    departemenId: number | null
  }

  export type KaryawanSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
    departemenId: number | null
  }

  export type KaryawanMinAggregateOutputType = {
    id: number | null
    nik: string | null
    NamaLengkap: string | null
    alamat: string | null
    noTelp: string | null
    tanggalMasukKaryawan: Date | null
    vendorId: number | null
    departemenId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaryawanMaxAggregateOutputType = {
    id: number | null
    nik: string | null
    NamaLengkap: string | null
    alamat: string | null
    noTelp: string | null
    tanggalMasukKaryawan: Date | null
    vendorId: number | null
    departemenId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaryawanCountAggregateOutputType = {
    id: number
    nik: number
    NamaLengkap: number
    alamat: number
    noTelp: number
    tanggalMasukKaryawan: number
    vendorId: number
    departemenId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KaryawanAvgAggregateInputType = {
    id?: true
    vendorId?: true
    departemenId?: true
  }

  export type KaryawanSumAggregateInputType = {
    id?: true
    vendorId?: true
    departemenId?: true
  }

  export type KaryawanMinAggregateInputType = {
    id?: true
    nik?: true
    NamaLengkap?: true
    alamat?: true
    noTelp?: true
    tanggalMasukKaryawan?: true
    vendorId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaryawanMaxAggregateInputType = {
    id?: true
    nik?: true
    NamaLengkap?: true
    alamat?: true
    noTelp?: true
    tanggalMasukKaryawan?: true
    vendorId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaryawanCountAggregateInputType = {
    id?: true
    nik?: true
    NamaLengkap?: true
    alamat?: true
    noTelp?: true
    tanggalMasukKaryawan?: true
    vendorId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KaryawanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawan to aggregate.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Karyawans
    **/
    _count?: true | KaryawanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaryawanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaryawanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaryawanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaryawanMaxAggregateInputType
  }

  export type GetKaryawanAggregateType<T extends KaryawanAggregateArgs> = {
        [P in keyof T & keyof AggregateKaryawan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKaryawan[P]>
      : GetScalarType<T[P], AggregateKaryawan[P]>
  }




  export type KaryawanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithAggregationInput | KaryawanOrderByWithAggregationInput[]
    by: KaryawanScalarFieldEnum[] | KaryawanScalarFieldEnum
    having?: KaryawanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaryawanCountAggregateInputType | true
    _avg?: KaryawanAvgAggregateInputType
    _sum?: KaryawanSumAggregateInputType
    _min?: KaryawanMinAggregateInputType
    _max?: KaryawanMaxAggregateInputType
  }

  export type KaryawanGroupByOutputType = {
    id: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date
    vendorId: number | null
    departemenId: number | null
    createdAt: Date
    updatedAt: Date
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  type GetKaryawanGroupByPayload<T extends KaryawanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaryawanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaryawanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
            : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
        }
      >
    >


  export type KaryawanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    NamaLengkap?: boolean
    alamat?: boolean
    noTelp?: boolean
    tanggalMasukKaryawan?: boolean
    vendorId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    GajiPokok?: boolean | Karyawan$GajiPokokArgs<ExtArgs>
    vendor?: boolean | Karyawan$vendorArgs<ExtArgs>
    departemen?: boolean | Karyawan$departemenArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["karyawan"]>



  export type KaryawanSelectScalar = {
    id?: boolean
    nik?: boolean
    NamaLengkap?: boolean
    alamat?: boolean
    noTelp?: boolean
    tanggalMasukKaryawan?: boolean
    vendorId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KaryawanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nik" | "NamaLengkap" | "alamat" | "noTelp" | "tanggalMasukKaryawan" | "vendorId" | "departemenId" | "createdAt" | "updatedAt", ExtArgs["result"]["karyawan"]>
  export type KaryawanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GajiPokok?: boolean | Karyawan$GajiPokokArgs<ExtArgs>
    vendor?: boolean | Karyawan$vendorArgs<ExtArgs>
    departemen?: boolean | Karyawan$departemenArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KaryawanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Karyawan"
    objects: {
      GajiPokok: Prisma.$GajiPokokPayload<ExtArgs>[]
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      departemen: Prisma.$DepartemenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nik: string
      NamaLengkap: string
      alamat: string
      noTelp: string
      tanggalMasukKaryawan: Date
      vendorId: number | null
      departemenId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["karyawan"]>
    composites: {}
  }

  type KaryawanGetPayload<S extends boolean | null | undefined | KaryawanDefaultArgs> = $Result.GetResult<Prisma.$KaryawanPayload, S>

  type KaryawanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KaryawanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KaryawanCountAggregateInputType | true
    }

  export interface KaryawanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Karyawan'], meta: { name: 'Karyawan' } }
    /**
     * Find zero or one Karyawan that matches the filter.
     * @param {KaryawanFindUniqueArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KaryawanFindUniqueArgs>(args: SelectSubset<T, KaryawanFindUniqueArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Karyawan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KaryawanFindUniqueOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KaryawanFindUniqueOrThrowArgs>(args: SelectSubset<T, KaryawanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KaryawanFindFirstArgs>(args?: SelectSubset<T, KaryawanFindFirstArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KaryawanFindFirstOrThrowArgs>(args?: SelectSubset<T, KaryawanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Karyawans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karyawans
     * const karyawans = await prisma.karyawan.findMany()
     * 
     * // Get first 10 Karyawans
     * const karyawans = await prisma.karyawan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const karyawanWithIdOnly = await prisma.karyawan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KaryawanFindManyArgs>(args?: SelectSubset<T, KaryawanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Karyawan.
     * @param {KaryawanCreateArgs} args - Arguments to create a Karyawan.
     * @example
     * // Create one Karyawan
     * const Karyawan = await prisma.karyawan.create({
     *   data: {
     *     // ... data to create a Karyawan
     *   }
     * })
     * 
     */
    create<T extends KaryawanCreateArgs>(args: SelectSubset<T, KaryawanCreateArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Karyawans.
     * @param {KaryawanCreateManyArgs} args - Arguments to create many Karyawans.
     * @example
     * // Create many Karyawans
     * const karyawan = await prisma.karyawan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KaryawanCreateManyArgs>(args?: SelectSubset<T, KaryawanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Karyawan.
     * @param {KaryawanDeleteArgs} args - Arguments to delete one Karyawan.
     * @example
     * // Delete one Karyawan
     * const Karyawan = await prisma.karyawan.delete({
     *   where: {
     *     // ... filter to delete one Karyawan
     *   }
     * })
     * 
     */
    delete<T extends KaryawanDeleteArgs>(args: SelectSubset<T, KaryawanDeleteArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Karyawan.
     * @param {KaryawanUpdateArgs} args - Arguments to update one Karyawan.
     * @example
     * // Update one Karyawan
     * const karyawan = await prisma.karyawan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KaryawanUpdateArgs>(args: SelectSubset<T, KaryawanUpdateArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Karyawans.
     * @param {KaryawanDeleteManyArgs} args - Arguments to filter Karyawans to delete.
     * @example
     * // Delete a few Karyawans
     * const { count } = await prisma.karyawan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KaryawanDeleteManyArgs>(args?: SelectSubset<T, KaryawanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KaryawanUpdateManyArgs>(args: SelectSubset<T, KaryawanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Karyawan.
     * @param {KaryawanUpsertArgs} args - Arguments to update or create a Karyawan.
     * @example
     * // Update or create a Karyawan
     * const karyawan = await prisma.karyawan.upsert({
     *   create: {
     *     // ... data to create a Karyawan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Karyawan we want to update
     *   }
     * })
     */
    upsert<T extends KaryawanUpsertArgs>(args: SelectSubset<T, KaryawanUpsertArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanCountArgs} args - Arguments to filter Karyawans to count.
     * @example
     * // Count the number of Karyawans
     * const count = await prisma.karyawan.count({
     *   where: {
     *     // ... the filter for the Karyawans we want to count
     *   }
     * })
    **/
    count<T extends KaryawanCountArgs>(
      args?: Subset<T, KaryawanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaryawanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KaryawanAggregateArgs>(args: Subset<T, KaryawanAggregateArgs>): Prisma.PrismaPromise<GetKaryawanAggregateType<T>>

    /**
     * Group by Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanGroupByArgs} args - Group by arguments.
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
      T extends KaryawanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KaryawanGroupByArgs['orderBy'] }
        : { orderBy?: KaryawanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KaryawanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaryawanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Karyawan model
   */
  readonly fields: KaryawanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Karyawan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KaryawanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GajiPokok<T extends Karyawan$GajiPokokArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$GajiPokokArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendor<T extends Karyawan$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departemen<T extends Karyawan$departemenArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$departemenArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Karyawan model
   */
  interface KaryawanFieldRefs {
    readonly id: FieldRef<"Karyawan", 'Int'>
    readonly nik: FieldRef<"Karyawan", 'String'>
    readonly NamaLengkap: FieldRef<"Karyawan", 'String'>
    readonly alamat: FieldRef<"Karyawan", 'String'>
    readonly noTelp: FieldRef<"Karyawan", 'String'>
    readonly tanggalMasukKaryawan: FieldRef<"Karyawan", 'DateTime'>
    readonly vendorId: FieldRef<"Karyawan", 'Int'>
    readonly departemenId: FieldRef<"Karyawan", 'Int'>
    readonly createdAt: FieldRef<"Karyawan", 'DateTime'>
    readonly updatedAt: FieldRef<"Karyawan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Karyawan findUnique
   */
  export type KaryawanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findUniqueOrThrow
   */
  export type KaryawanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findFirst
   */
  export type KaryawanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findFirstOrThrow
   */
  export type KaryawanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findMany
   */
  export type KaryawanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawans to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan create
   */
  export type KaryawanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to create a Karyawan.
     */
    data: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
  }

  /**
   * Karyawan createMany
   */
  export type KaryawanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Karyawans.
     */
    data: KaryawanCreateManyInput | KaryawanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Karyawan update
   */
  export type KaryawanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to update a Karyawan.
     */
    data: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
    /**
     * Choose, which Karyawan to update.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan updateMany
   */
  export type KaryawanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Karyawans.
     */
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyInput>
    /**
     * Filter which Karyawans to update
     */
    where?: KaryawanWhereInput
    /**
     * Limit how many Karyawans to update.
     */
    limit?: number
  }

  /**
   * Karyawan upsert
   */
  export type KaryawanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The filter to search for the Karyawan to update in case it exists.
     */
    where: KaryawanWhereUniqueInput
    /**
     * In case the Karyawan found by the `where` argument doesn't exist, create a new Karyawan with this data.
     */
    create: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
    /**
     * In case the Karyawan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
  }

  /**
   * Karyawan delete
   */
  export type KaryawanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter which Karyawan to delete.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan deleteMany
   */
  export type KaryawanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawans to delete
     */
    where?: KaryawanWhereInput
    /**
     * Limit how many Karyawans to delete.
     */
    limit?: number
  }

  /**
   * Karyawan.GajiPokok
   */
  export type Karyawan$GajiPokokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    where?: GajiPokokWhereInput
    orderBy?: GajiPokokOrderByWithRelationInput | GajiPokokOrderByWithRelationInput[]
    cursor?: GajiPokokWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GajiPokokScalarFieldEnum | GajiPokokScalarFieldEnum[]
  }

  /**
   * Karyawan.vendor
   */
  export type Karyawan$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Karyawan.departemen
   */
  export type Karyawan$departemenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    where?: DepartemenWhereInput
  }

  /**
   * Karyawan without action
   */
  export type KaryawanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
  }


  /**
   * Model JamKerja
   */

  export type AggregateJamKerja = {
    _count: JamKerjaCountAggregateOutputType | null
    _avg: JamKerjaAvgAggregateOutputType | null
    _sum: JamKerjaSumAggregateOutputType | null
    _min: JamKerjaMinAggregateOutputType | null
    _max: JamKerjaMaxAggregateOutputType | null
  }

  export type JamKerjaAvgAggregateOutputType = {
    id: number | null
  }

  export type JamKerjaSumAggregateOutputType = {
    id: number | null
  }

  export type JamKerjaMinAggregateOutputType = {
    id: number | null
    kodeShift: string | null
    jamMasuk: Date | null
    jamPulang: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JamKerjaMaxAggregateOutputType = {
    id: number | null
    kodeShift: string | null
    jamMasuk: Date | null
    jamPulang: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JamKerjaCountAggregateOutputType = {
    id: number
    kodeShift: number
    jamMasuk: number
    jamPulang: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JamKerjaAvgAggregateInputType = {
    id?: true
  }

  export type JamKerjaSumAggregateInputType = {
    id?: true
  }

  export type JamKerjaMinAggregateInputType = {
    id?: true
    kodeShift?: true
    jamMasuk?: true
    jamPulang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JamKerjaMaxAggregateInputType = {
    id?: true
    kodeShift?: true
    jamMasuk?: true
    jamPulang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JamKerjaCountAggregateInputType = {
    id?: true
    kodeShift?: true
    jamMasuk?: true
    jamPulang?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JamKerjaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JamKerja to aggregate.
     */
    where?: JamKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamKerjas to fetch.
     */
    orderBy?: JamKerjaOrderByWithRelationInput | JamKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JamKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JamKerjas
    **/
    _count?: true | JamKerjaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JamKerjaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JamKerjaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JamKerjaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JamKerjaMaxAggregateInputType
  }

  export type GetJamKerjaAggregateType<T extends JamKerjaAggregateArgs> = {
        [P in keyof T & keyof AggregateJamKerja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJamKerja[P]>
      : GetScalarType<T[P], AggregateJamKerja[P]>
  }




  export type JamKerjaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JamKerjaWhereInput
    orderBy?: JamKerjaOrderByWithAggregationInput | JamKerjaOrderByWithAggregationInput[]
    by: JamKerjaScalarFieldEnum[] | JamKerjaScalarFieldEnum
    having?: JamKerjaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JamKerjaCountAggregateInputType | true
    _avg?: JamKerjaAvgAggregateInputType
    _sum?: JamKerjaSumAggregateInputType
    _min?: JamKerjaMinAggregateInputType
    _max?: JamKerjaMaxAggregateInputType
  }

  export type JamKerjaGroupByOutputType = {
    id: number
    kodeShift: string
    jamMasuk: Date
    jamPulang: Date
    createdAt: Date
    updatedAt: Date
    _count: JamKerjaCountAggregateOutputType | null
    _avg: JamKerjaAvgAggregateOutputType | null
    _sum: JamKerjaSumAggregateOutputType | null
    _min: JamKerjaMinAggregateOutputType | null
    _max: JamKerjaMaxAggregateOutputType | null
  }

  type GetJamKerjaGroupByPayload<T extends JamKerjaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JamKerjaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JamKerjaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JamKerjaGroupByOutputType[P]>
            : GetScalarType<T[P], JamKerjaGroupByOutputType[P]>
        }
      >
    >


  export type JamKerjaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeShift?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jamKerja"]>



  export type JamKerjaSelectScalar = {
    id?: boolean
    kodeShift?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JamKerjaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeShift" | "jamMasuk" | "jamPulang" | "createdAt" | "updatedAt", ExtArgs["result"]["jamKerja"]>

  export type $JamKerjaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JamKerja"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kodeShift: string
      jamMasuk: Date
      jamPulang: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jamKerja"]>
    composites: {}
  }

  type JamKerjaGetPayload<S extends boolean | null | undefined | JamKerjaDefaultArgs> = $Result.GetResult<Prisma.$JamKerjaPayload, S>

  type JamKerjaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JamKerjaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JamKerjaCountAggregateInputType | true
    }

  export interface JamKerjaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JamKerja'], meta: { name: 'JamKerja' } }
    /**
     * Find zero or one JamKerja that matches the filter.
     * @param {JamKerjaFindUniqueArgs} args - Arguments to find a JamKerja
     * @example
     * // Get one JamKerja
     * const jamKerja = await prisma.jamKerja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JamKerjaFindUniqueArgs>(args: SelectSubset<T, JamKerjaFindUniqueArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JamKerja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JamKerjaFindUniqueOrThrowArgs} args - Arguments to find a JamKerja
     * @example
     * // Get one JamKerja
     * const jamKerja = await prisma.jamKerja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JamKerjaFindUniqueOrThrowArgs>(args: SelectSubset<T, JamKerjaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JamKerja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaFindFirstArgs} args - Arguments to find a JamKerja
     * @example
     * // Get one JamKerja
     * const jamKerja = await prisma.jamKerja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JamKerjaFindFirstArgs>(args?: SelectSubset<T, JamKerjaFindFirstArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JamKerja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaFindFirstOrThrowArgs} args - Arguments to find a JamKerja
     * @example
     * // Get one JamKerja
     * const jamKerja = await prisma.jamKerja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JamKerjaFindFirstOrThrowArgs>(args?: SelectSubset<T, JamKerjaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JamKerjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JamKerjas
     * const jamKerjas = await prisma.jamKerja.findMany()
     * 
     * // Get first 10 JamKerjas
     * const jamKerjas = await prisma.jamKerja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jamKerjaWithIdOnly = await prisma.jamKerja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JamKerjaFindManyArgs>(args?: SelectSubset<T, JamKerjaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JamKerja.
     * @param {JamKerjaCreateArgs} args - Arguments to create a JamKerja.
     * @example
     * // Create one JamKerja
     * const JamKerja = await prisma.jamKerja.create({
     *   data: {
     *     // ... data to create a JamKerja
     *   }
     * })
     * 
     */
    create<T extends JamKerjaCreateArgs>(args: SelectSubset<T, JamKerjaCreateArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JamKerjas.
     * @param {JamKerjaCreateManyArgs} args - Arguments to create many JamKerjas.
     * @example
     * // Create many JamKerjas
     * const jamKerja = await prisma.jamKerja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JamKerjaCreateManyArgs>(args?: SelectSubset<T, JamKerjaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JamKerja.
     * @param {JamKerjaDeleteArgs} args - Arguments to delete one JamKerja.
     * @example
     * // Delete one JamKerja
     * const JamKerja = await prisma.jamKerja.delete({
     *   where: {
     *     // ... filter to delete one JamKerja
     *   }
     * })
     * 
     */
    delete<T extends JamKerjaDeleteArgs>(args: SelectSubset<T, JamKerjaDeleteArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JamKerja.
     * @param {JamKerjaUpdateArgs} args - Arguments to update one JamKerja.
     * @example
     * // Update one JamKerja
     * const jamKerja = await prisma.jamKerja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JamKerjaUpdateArgs>(args: SelectSubset<T, JamKerjaUpdateArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JamKerjas.
     * @param {JamKerjaDeleteManyArgs} args - Arguments to filter JamKerjas to delete.
     * @example
     * // Delete a few JamKerjas
     * const { count } = await prisma.jamKerja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JamKerjaDeleteManyArgs>(args?: SelectSubset<T, JamKerjaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JamKerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JamKerjas
     * const jamKerja = await prisma.jamKerja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JamKerjaUpdateManyArgs>(args: SelectSubset<T, JamKerjaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JamKerja.
     * @param {JamKerjaUpsertArgs} args - Arguments to update or create a JamKerja.
     * @example
     * // Update or create a JamKerja
     * const jamKerja = await prisma.jamKerja.upsert({
     *   create: {
     *     // ... data to create a JamKerja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JamKerja we want to update
     *   }
     * })
     */
    upsert<T extends JamKerjaUpsertArgs>(args: SelectSubset<T, JamKerjaUpsertArgs<ExtArgs>>): Prisma__JamKerjaClient<$Result.GetResult<Prisma.$JamKerjaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JamKerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaCountArgs} args - Arguments to filter JamKerjas to count.
     * @example
     * // Count the number of JamKerjas
     * const count = await prisma.jamKerja.count({
     *   where: {
     *     // ... the filter for the JamKerjas we want to count
     *   }
     * })
    **/
    count<T extends JamKerjaCountArgs>(
      args?: Subset<T, JamKerjaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JamKerjaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JamKerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JamKerjaAggregateArgs>(args: Subset<T, JamKerjaAggregateArgs>): Prisma.PrismaPromise<GetJamKerjaAggregateType<T>>

    /**
     * Group by JamKerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamKerjaGroupByArgs} args - Group by arguments.
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
      T extends JamKerjaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JamKerjaGroupByArgs['orderBy'] }
        : { orderBy?: JamKerjaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JamKerjaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJamKerjaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JamKerja model
   */
  readonly fields: JamKerjaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JamKerja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JamKerjaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JamKerja model
   */
  interface JamKerjaFieldRefs {
    readonly id: FieldRef<"JamKerja", 'Int'>
    readonly kodeShift: FieldRef<"JamKerja", 'String'>
    readonly jamMasuk: FieldRef<"JamKerja", 'DateTime'>
    readonly jamPulang: FieldRef<"JamKerja", 'DateTime'>
    readonly createdAt: FieldRef<"JamKerja", 'DateTime'>
    readonly updatedAt: FieldRef<"JamKerja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JamKerja findUnique
   */
  export type JamKerjaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter, which JamKerja to fetch.
     */
    where: JamKerjaWhereUniqueInput
  }

  /**
   * JamKerja findUniqueOrThrow
   */
  export type JamKerjaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter, which JamKerja to fetch.
     */
    where: JamKerjaWhereUniqueInput
  }

  /**
   * JamKerja findFirst
   */
  export type JamKerjaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter, which JamKerja to fetch.
     */
    where?: JamKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamKerjas to fetch.
     */
    orderBy?: JamKerjaOrderByWithRelationInput | JamKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamKerjas.
     */
    cursor?: JamKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamKerjas.
     */
    distinct?: JamKerjaScalarFieldEnum | JamKerjaScalarFieldEnum[]
  }

  /**
   * JamKerja findFirstOrThrow
   */
  export type JamKerjaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter, which JamKerja to fetch.
     */
    where?: JamKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamKerjas to fetch.
     */
    orderBy?: JamKerjaOrderByWithRelationInput | JamKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamKerjas.
     */
    cursor?: JamKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamKerjas.
     */
    distinct?: JamKerjaScalarFieldEnum | JamKerjaScalarFieldEnum[]
  }

  /**
   * JamKerja findMany
   */
  export type JamKerjaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter, which JamKerjas to fetch.
     */
    where?: JamKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamKerjas to fetch.
     */
    orderBy?: JamKerjaOrderByWithRelationInput | JamKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JamKerjas.
     */
    cursor?: JamKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamKerjas.
     */
    skip?: number
    distinct?: JamKerjaScalarFieldEnum | JamKerjaScalarFieldEnum[]
  }

  /**
   * JamKerja create
   */
  export type JamKerjaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * The data needed to create a JamKerja.
     */
    data: XOR<JamKerjaCreateInput, JamKerjaUncheckedCreateInput>
  }

  /**
   * JamKerja createMany
   */
  export type JamKerjaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JamKerjas.
     */
    data: JamKerjaCreateManyInput | JamKerjaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JamKerja update
   */
  export type JamKerjaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * The data needed to update a JamKerja.
     */
    data: XOR<JamKerjaUpdateInput, JamKerjaUncheckedUpdateInput>
    /**
     * Choose, which JamKerja to update.
     */
    where: JamKerjaWhereUniqueInput
  }

  /**
   * JamKerja updateMany
   */
  export type JamKerjaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JamKerjas.
     */
    data: XOR<JamKerjaUpdateManyMutationInput, JamKerjaUncheckedUpdateManyInput>
    /**
     * Filter which JamKerjas to update
     */
    where?: JamKerjaWhereInput
    /**
     * Limit how many JamKerjas to update.
     */
    limit?: number
  }

  /**
   * JamKerja upsert
   */
  export type JamKerjaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * The filter to search for the JamKerja to update in case it exists.
     */
    where: JamKerjaWhereUniqueInput
    /**
     * In case the JamKerja found by the `where` argument doesn't exist, create a new JamKerja with this data.
     */
    create: XOR<JamKerjaCreateInput, JamKerjaUncheckedCreateInput>
    /**
     * In case the JamKerja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JamKerjaUpdateInput, JamKerjaUncheckedUpdateInput>
  }

  /**
   * JamKerja delete
   */
  export type JamKerjaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
    /**
     * Filter which JamKerja to delete.
     */
    where: JamKerjaWhereUniqueInput
  }

  /**
   * JamKerja deleteMany
   */
  export type JamKerjaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JamKerjas to delete
     */
    where?: JamKerjaWhereInput
    /**
     * Limit how many JamKerjas to delete.
     */
    limit?: number
  }

  /**
   * JamKerja without action
   */
  export type JamKerjaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamKerja
     */
    select?: JamKerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JamKerja
     */
    omit?: JamKerjaOmit<ExtArgs> | null
  }


  /**
   * Model GajiPokok
   */

  export type AggregateGajiPokok = {
    _count: GajiPokokCountAggregateOutputType | null
    _avg: GajiPokokAvgAggregateOutputType | null
    _sum: GajiPokokSumAggregateOutputType | null
    _min: GajiPokokMinAggregateOutputType | null
    _max: GajiPokokMaxAggregateOutputType | null
  }

  export type GajiPokokAvgAggregateOutputType = {
    id: number | null
    jumlahGaji: Decimal | null
    karyawanId: number | null
  }

  export type GajiPokokSumAggregateOutputType = {
    id: number | null
    jumlahGaji: Decimal | null
    karyawanId: number | null
  }

  export type GajiPokokMinAggregateOutputType = {
    id: number | null
    jumlahGaji: Decimal | null
    karyawanId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GajiPokokMaxAggregateOutputType = {
    id: number | null
    jumlahGaji: Decimal | null
    karyawanId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GajiPokokCountAggregateOutputType = {
    id: number
    jumlahGaji: number
    karyawanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GajiPokokAvgAggregateInputType = {
    id?: true
    jumlahGaji?: true
    karyawanId?: true
  }

  export type GajiPokokSumAggregateInputType = {
    id?: true
    jumlahGaji?: true
    karyawanId?: true
  }

  export type GajiPokokMinAggregateInputType = {
    id?: true
    jumlahGaji?: true
    karyawanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GajiPokokMaxAggregateInputType = {
    id?: true
    jumlahGaji?: true
    karyawanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GajiPokokCountAggregateInputType = {
    id?: true
    jumlahGaji?: true
    karyawanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GajiPokokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GajiPokok to aggregate.
     */
    where?: GajiPokokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GajiPokoks to fetch.
     */
    orderBy?: GajiPokokOrderByWithRelationInput | GajiPokokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GajiPokokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GajiPokoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GajiPokoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GajiPokoks
    **/
    _count?: true | GajiPokokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GajiPokokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GajiPokokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GajiPokokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GajiPokokMaxAggregateInputType
  }

  export type GetGajiPokokAggregateType<T extends GajiPokokAggregateArgs> = {
        [P in keyof T & keyof AggregateGajiPokok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGajiPokok[P]>
      : GetScalarType<T[P], AggregateGajiPokok[P]>
  }




  export type GajiPokokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GajiPokokWhereInput
    orderBy?: GajiPokokOrderByWithAggregationInput | GajiPokokOrderByWithAggregationInput[]
    by: GajiPokokScalarFieldEnum[] | GajiPokokScalarFieldEnum
    having?: GajiPokokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GajiPokokCountAggregateInputType | true
    _avg?: GajiPokokAvgAggregateInputType
    _sum?: GajiPokokSumAggregateInputType
    _min?: GajiPokokMinAggregateInputType
    _max?: GajiPokokMaxAggregateInputType
  }

  export type GajiPokokGroupByOutputType = {
    id: number
    jumlahGaji: Decimal
    karyawanId: number | null
    createdAt: Date
    updatedAt: Date
    _count: GajiPokokCountAggregateOutputType | null
    _avg: GajiPokokAvgAggregateOutputType | null
    _sum: GajiPokokSumAggregateOutputType | null
    _min: GajiPokokMinAggregateOutputType | null
    _max: GajiPokokMaxAggregateOutputType | null
  }

  type GetGajiPokokGroupByPayload<T extends GajiPokokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GajiPokokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GajiPokokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GajiPokokGroupByOutputType[P]>
            : GetScalarType<T[P], GajiPokokGroupByOutputType[P]>
        }
      >
    >


  export type GajiPokokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlahGaji?: boolean
    karyawanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    karyawan?: boolean | GajiPokok$karyawanArgs<ExtArgs>
  }, ExtArgs["result"]["gajiPokok"]>



  export type GajiPokokSelectScalar = {
    id?: boolean
    jumlahGaji?: boolean
    karyawanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GajiPokokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jumlahGaji" | "karyawanId" | "createdAt" | "updatedAt", ExtArgs["result"]["gajiPokok"]>
  export type GajiPokokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    karyawan?: boolean | GajiPokok$karyawanArgs<ExtArgs>
  }

  export type $GajiPokokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GajiPokok"
    objects: {
      karyawan: Prisma.$KaryawanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jumlahGaji: Prisma.Decimal
      karyawanId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gajiPokok"]>
    composites: {}
  }

  type GajiPokokGetPayload<S extends boolean | null | undefined | GajiPokokDefaultArgs> = $Result.GetResult<Prisma.$GajiPokokPayload, S>

  type GajiPokokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GajiPokokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GajiPokokCountAggregateInputType | true
    }

  export interface GajiPokokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GajiPokok'], meta: { name: 'GajiPokok' } }
    /**
     * Find zero or one GajiPokok that matches the filter.
     * @param {GajiPokokFindUniqueArgs} args - Arguments to find a GajiPokok
     * @example
     * // Get one GajiPokok
     * const gajiPokok = await prisma.gajiPokok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GajiPokokFindUniqueArgs>(args: SelectSubset<T, GajiPokokFindUniqueArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GajiPokok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GajiPokokFindUniqueOrThrowArgs} args - Arguments to find a GajiPokok
     * @example
     * // Get one GajiPokok
     * const gajiPokok = await prisma.gajiPokok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GajiPokokFindUniqueOrThrowArgs>(args: SelectSubset<T, GajiPokokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GajiPokok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokFindFirstArgs} args - Arguments to find a GajiPokok
     * @example
     * // Get one GajiPokok
     * const gajiPokok = await prisma.gajiPokok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GajiPokokFindFirstArgs>(args?: SelectSubset<T, GajiPokokFindFirstArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GajiPokok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokFindFirstOrThrowArgs} args - Arguments to find a GajiPokok
     * @example
     * // Get one GajiPokok
     * const gajiPokok = await prisma.gajiPokok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GajiPokokFindFirstOrThrowArgs>(args?: SelectSubset<T, GajiPokokFindFirstOrThrowArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GajiPokoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GajiPokoks
     * const gajiPokoks = await prisma.gajiPokok.findMany()
     * 
     * // Get first 10 GajiPokoks
     * const gajiPokoks = await prisma.gajiPokok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gajiPokokWithIdOnly = await prisma.gajiPokok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GajiPokokFindManyArgs>(args?: SelectSubset<T, GajiPokokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GajiPokok.
     * @param {GajiPokokCreateArgs} args - Arguments to create a GajiPokok.
     * @example
     * // Create one GajiPokok
     * const GajiPokok = await prisma.gajiPokok.create({
     *   data: {
     *     // ... data to create a GajiPokok
     *   }
     * })
     * 
     */
    create<T extends GajiPokokCreateArgs>(args: SelectSubset<T, GajiPokokCreateArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GajiPokoks.
     * @param {GajiPokokCreateManyArgs} args - Arguments to create many GajiPokoks.
     * @example
     * // Create many GajiPokoks
     * const gajiPokok = await prisma.gajiPokok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GajiPokokCreateManyArgs>(args?: SelectSubset<T, GajiPokokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GajiPokok.
     * @param {GajiPokokDeleteArgs} args - Arguments to delete one GajiPokok.
     * @example
     * // Delete one GajiPokok
     * const GajiPokok = await prisma.gajiPokok.delete({
     *   where: {
     *     // ... filter to delete one GajiPokok
     *   }
     * })
     * 
     */
    delete<T extends GajiPokokDeleteArgs>(args: SelectSubset<T, GajiPokokDeleteArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GajiPokok.
     * @param {GajiPokokUpdateArgs} args - Arguments to update one GajiPokok.
     * @example
     * // Update one GajiPokok
     * const gajiPokok = await prisma.gajiPokok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GajiPokokUpdateArgs>(args: SelectSubset<T, GajiPokokUpdateArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GajiPokoks.
     * @param {GajiPokokDeleteManyArgs} args - Arguments to filter GajiPokoks to delete.
     * @example
     * // Delete a few GajiPokoks
     * const { count } = await prisma.gajiPokok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GajiPokokDeleteManyArgs>(args?: SelectSubset<T, GajiPokokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GajiPokoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GajiPokoks
     * const gajiPokok = await prisma.gajiPokok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GajiPokokUpdateManyArgs>(args: SelectSubset<T, GajiPokokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GajiPokok.
     * @param {GajiPokokUpsertArgs} args - Arguments to update or create a GajiPokok.
     * @example
     * // Update or create a GajiPokok
     * const gajiPokok = await prisma.gajiPokok.upsert({
     *   create: {
     *     // ... data to create a GajiPokok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GajiPokok we want to update
     *   }
     * })
     */
    upsert<T extends GajiPokokUpsertArgs>(args: SelectSubset<T, GajiPokokUpsertArgs<ExtArgs>>): Prisma__GajiPokokClient<$Result.GetResult<Prisma.$GajiPokokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GajiPokoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokCountArgs} args - Arguments to filter GajiPokoks to count.
     * @example
     * // Count the number of GajiPokoks
     * const count = await prisma.gajiPokok.count({
     *   where: {
     *     // ... the filter for the GajiPokoks we want to count
     *   }
     * })
    **/
    count<T extends GajiPokokCountArgs>(
      args?: Subset<T, GajiPokokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GajiPokokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GajiPokok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GajiPokokAggregateArgs>(args: Subset<T, GajiPokokAggregateArgs>): Prisma.PrismaPromise<GetGajiPokokAggregateType<T>>

    /**
     * Group by GajiPokok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiPokokGroupByArgs} args - Group by arguments.
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
      T extends GajiPokokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GajiPokokGroupByArgs['orderBy'] }
        : { orderBy?: GajiPokokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GajiPokokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGajiPokokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GajiPokok model
   */
  readonly fields: GajiPokokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GajiPokok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GajiPokokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    karyawan<T extends GajiPokok$karyawanArgs<ExtArgs> = {}>(args?: Subset<T, GajiPokok$karyawanArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GajiPokok model
   */
  interface GajiPokokFieldRefs {
    readonly id: FieldRef<"GajiPokok", 'Int'>
    readonly jumlahGaji: FieldRef<"GajiPokok", 'Decimal'>
    readonly karyawanId: FieldRef<"GajiPokok", 'Int'>
    readonly createdAt: FieldRef<"GajiPokok", 'DateTime'>
    readonly updatedAt: FieldRef<"GajiPokok", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GajiPokok findUnique
   */
  export type GajiPokokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter, which GajiPokok to fetch.
     */
    where: GajiPokokWhereUniqueInput
  }

  /**
   * GajiPokok findUniqueOrThrow
   */
  export type GajiPokokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter, which GajiPokok to fetch.
     */
    where: GajiPokokWhereUniqueInput
  }

  /**
   * GajiPokok findFirst
   */
  export type GajiPokokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter, which GajiPokok to fetch.
     */
    where?: GajiPokokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GajiPokoks to fetch.
     */
    orderBy?: GajiPokokOrderByWithRelationInput | GajiPokokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GajiPokoks.
     */
    cursor?: GajiPokokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GajiPokoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GajiPokoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GajiPokoks.
     */
    distinct?: GajiPokokScalarFieldEnum | GajiPokokScalarFieldEnum[]
  }

  /**
   * GajiPokok findFirstOrThrow
   */
  export type GajiPokokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter, which GajiPokok to fetch.
     */
    where?: GajiPokokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GajiPokoks to fetch.
     */
    orderBy?: GajiPokokOrderByWithRelationInput | GajiPokokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GajiPokoks.
     */
    cursor?: GajiPokokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GajiPokoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GajiPokoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GajiPokoks.
     */
    distinct?: GajiPokokScalarFieldEnum | GajiPokokScalarFieldEnum[]
  }

  /**
   * GajiPokok findMany
   */
  export type GajiPokokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter, which GajiPokoks to fetch.
     */
    where?: GajiPokokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GajiPokoks to fetch.
     */
    orderBy?: GajiPokokOrderByWithRelationInput | GajiPokokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GajiPokoks.
     */
    cursor?: GajiPokokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GajiPokoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GajiPokoks.
     */
    skip?: number
    distinct?: GajiPokokScalarFieldEnum | GajiPokokScalarFieldEnum[]
  }

  /**
   * GajiPokok create
   */
  export type GajiPokokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * The data needed to create a GajiPokok.
     */
    data: XOR<GajiPokokCreateInput, GajiPokokUncheckedCreateInput>
  }

  /**
   * GajiPokok createMany
   */
  export type GajiPokokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GajiPokoks.
     */
    data: GajiPokokCreateManyInput | GajiPokokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GajiPokok update
   */
  export type GajiPokokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * The data needed to update a GajiPokok.
     */
    data: XOR<GajiPokokUpdateInput, GajiPokokUncheckedUpdateInput>
    /**
     * Choose, which GajiPokok to update.
     */
    where: GajiPokokWhereUniqueInput
  }

  /**
   * GajiPokok updateMany
   */
  export type GajiPokokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GajiPokoks.
     */
    data: XOR<GajiPokokUpdateManyMutationInput, GajiPokokUncheckedUpdateManyInput>
    /**
     * Filter which GajiPokoks to update
     */
    where?: GajiPokokWhereInput
    /**
     * Limit how many GajiPokoks to update.
     */
    limit?: number
  }

  /**
   * GajiPokok upsert
   */
  export type GajiPokokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * The filter to search for the GajiPokok to update in case it exists.
     */
    where: GajiPokokWhereUniqueInput
    /**
     * In case the GajiPokok found by the `where` argument doesn't exist, create a new GajiPokok with this data.
     */
    create: XOR<GajiPokokCreateInput, GajiPokokUncheckedCreateInput>
    /**
     * In case the GajiPokok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GajiPokokUpdateInput, GajiPokokUncheckedUpdateInput>
  }

  /**
   * GajiPokok delete
   */
  export type GajiPokokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
    /**
     * Filter which GajiPokok to delete.
     */
    where: GajiPokokWhereUniqueInput
  }

  /**
   * GajiPokok deleteMany
   */
  export type GajiPokokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GajiPokoks to delete
     */
    where?: GajiPokokWhereInput
    /**
     * Limit how many GajiPokoks to delete.
     */
    limit?: number
  }

  /**
   * GajiPokok.karyawan
   */
  export type GajiPokok$karyawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    where?: KaryawanWhereInput
  }

  /**
   * GajiPokok without action
   */
  export type GajiPokokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GajiPokok
     */
    select?: GajiPokokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GajiPokok
     */
    omit?: GajiPokokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiPokokInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartemenScalarFieldEnum: {
    id: 'id',
    slugDepartemen: 'slugDepartemen',
    namaDepartemen: 'namaDepartemen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartemenScalarFieldEnum = (typeof DepartemenScalarFieldEnum)[keyof typeof DepartemenScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    slugVendor: 'slugVendor',
    namaVendor: 'namaVendor',
    alamat: 'alamat',
    noTelp: 'noTelp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const AlasanLemburScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlasanLemburScalarFieldEnum = (typeof AlasanLemburScalarFieldEnum)[keyof typeof AlasanLemburScalarFieldEnum]


  export const KaryawanScalarFieldEnum: {
    id: 'id',
    nik: 'nik',
    NamaLengkap: 'NamaLengkap',
    alamat: 'alamat',
    noTelp: 'noTelp',
    tanggalMasukKaryawan: 'tanggalMasukKaryawan',
    vendorId: 'vendorId',
    departemenId: 'departemenId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KaryawanScalarFieldEnum = (typeof KaryawanScalarFieldEnum)[keyof typeof KaryawanScalarFieldEnum]


  export const JamKerjaScalarFieldEnum: {
    id: 'id',
    kodeShift: 'kodeShift',
    jamMasuk: 'jamMasuk',
    jamPulang: 'jamPulang',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JamKerjaScalarFieldEnum = (typeof JamKerjaScalarFieldEnum)[keyof typeof JamKerjaScalarFieldEnum]


  export const GajiPokokScalarFieldEnum: {
    id: 'id',
    jumlahGaji: 'jumlahGaji',
    karyawanId: 'karyawanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GajiPokokScalarFieldEnum = (typeof GajiPokokScalarFieldEnum)[keyof typeof GajiPokokScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DepartemenOrderByRelevanceFieldEnum: {
    slugDepartemen: 'slugDepartemen',
    namaDepartemen: 'namaDepartemen'
  };

  export type DepartemenOrderByRelevanceFieldEnum = (typeof DepartemenOrderByRelevanceFieldEnum)[keyof typeof DepartemenOrderByRelevanceFieldEnum]


  export const VendorOrderByRelevanceFieldEnum: {
    slugVendor: 'slugVendor',
    namaVendor: 'namaVendor',
    alamat: 'alamat',
    noTelp: 'noTelp'
  };

  export type VendorOrderByRelevanceFieldEnum = (typeof VendorOrderByRelevanceFieldEnum)[keyof typeof VendorOrderByRelevanceFieldEnum]


  export const AlasanLemburOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type AlasanLemburOrderByRelevanceFieldEnum = (typeof AlasanLemburOrderByRelevanceFieldEnum)[keyof typeof AlasanLemburOrderByRelevanceFieldEnum]


  export const KaryawanOrderByRelevanceFieldEnum: {
    nik: 'nik',
    NamaLengkap: 'NamaLengkap',
    alamat: 'alamat',
    noTelp: 'noTelp'
  };

  export type KaryawanOrderByRelevanceFieldEnum = (typeof KaryawanOrderByRelevanceFieldEnum)[keyof typeof KaryawanOrderByRelevanceFieldEnum]


  export const JamKerjaOrderByRelevanceFieldEnum: {
    kodeShift: 'kodeShift'
  };

  export type JamKerjaOrderByRelevanceFieldEnum = (typeof JamKerjaOrderByRelevanceFieldEnum)[keyof typeof JamKerjaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartemenWhereInput = {
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    id?: IntFilter<"Departemen"> | number
    slugDepartemen?: StringFilter<"Departemen"> | string
    namaDepartemen?: StringFilter<"Departemen"> | string
    createdAt?: DateTimeFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeFilter<"Departemen"> | Date | string
    Karyawan?: KaryawanListRelationFilter
  }

  export type DepartemenOrderByWithRelationInput = {
    id?: SortOrder
    slugDepartemen?: SortOrder
    namaDepartemen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Karyawan?: KaryawanOrderByRelationAggregateInput
    _relevance?: DepartemenOrderByRelevanceInput
  }

  export type DepartemenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slugDepartemen?: string
    namaDepartemen?: string
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    createdAt?: DateTimeFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeFilter<"Departemen"> | Date | string
    Karyawan?: KaryawanListRelationFilter
  }, "id" | "slugDepartemen" | "namaDepartemen">

  export type DepartemenOrderByWithAggregationInput = {
    id?: SortOrder
    slugDepartemen?: SortOrder
    namaDepartemen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartemenCountOrderByAggregateInput
    _avg?: DepartemenAvgOrderByAggregateInput
    _max?: DepartemenMaxOrderByAggregateInput
    _min?: DepartemenMinOrderByAggregateInput
    _sum?: DepartemenSumOrderByAggregateInput
  }

  export type DepartemenScalarWhereWithAggregatesInput = {
    AND?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    OR?: DepartemenScalarWhereWithAggregatesInput[]
    NOT?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departemen"> | number
    slugDepartemen?: StringWithAggregatesFilter<"Departemen"> | string
    namaDepartemen?: StringWithAggregatesFilter<"Departemen"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departemen"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: IntFilter<"Vendor"> | number
    slugVendor?: StringFilter<"Vendor"> | string
    namaVendor?: StringFilter<"Vendor"> | string
    alamat?: StringFilter<"Vendor"> | string
    noTelp?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    Karyawan?: KaryawanListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    slugVendor?: SortOrder
    namaVendor?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Karyawan?: KaryawanOrderByRelationAggregateInput
    _relevance?: VendorOrderByRelevanceInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slugVendor?: string
    namaVendor?: string
    noTelp?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    alamat?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    Karyawan?: KaryawanListRelationFilter
  }, "id" | "slugVendor" | "namaVendor" | "noTelp">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    slugVendor?: SortOrder
    namaVendor?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendor"> | number
    slugVendor?: StringWithAggregatesFilter<"Vendor"> | string
    namaVendor?: StringWithAggregatesFilter<"Vendor"> | string
    alamat?: StringWithAggregatesFilter<"Vendor"> | string
    noTelp?: StringWithAggregatesFilter<"Vendor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type AlasanLemburWhereInput = {
    AND?: AlasanLemburWhereInput | AlasanLemburWhereInput[]
    OR?: AlasanLemburWhereInput[]
    NOT?: AlasanLemburWhereInput | AlasanLemburWhereInput[]
    id?: IntFilter<"AlasanLembur"> | number
    description?: StringFilter<"AlasanLembur"> | string
    createdAt?: DateTimeFilter<"AlasanLembur"> | Date | string
    updatedAt?: DateTimeFilter<"AlasanLembur"> | Date | string
  }

  export type AlasanLemburOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AlasanLemburOrderByRelevanceInput
  }

  export type AlasanLemburWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlasanLemburWhereInput | AlasanLemburWhereInput[]
    OR?: AlasanLemburWhereInput[]
    NOT?: AlasanLemburWhereInput | AlasanLemburWhereInput[]
    description?: StringFilter<"AlasanLembur"> | string
    createdAt?: DateTimeFilter<"AlasanLembur"> | Date | string
    updatedAt?: DateTimeFilter<"AlasanLembur"> | Date | string
  }, "id">

  export type AlasanLemburOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlasanLemburCountOrderByAggregateInput
    _avg?: AlasanLemburAvgOrderByAggregateInput
    _max?: AlasanLemburMaxOrderByAggregateInput
    _min?: AlasanLemburMinOrderByAggregateInput
    _sum?: AlasanLemburSumOrderByAggregateInput
  }

  export type AlasanLemburScalarWhereWithAggregatesInput = {
    AND?: AlasanLemburScalarWhereWithAggregatesInput | AlasanLemburScalarWhereWithAggregatesInput[]
    OR?: AlasanLemburScalarWhereWithAggregatesInput[]
    NOT?: AlasanLemburScalarWhereWithAggregatesInput | AlasanLemburScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlasanLembur"> | number
    description?: StringWithAggregatesFilter<"AlasanLembur"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlasanLembur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlasanLembur"> | Date | string
  }

  export type KaryawanWhereInput = {
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    id?: IntFilter<"Karyawan"> | number
    nik?: StringFilter<"Karyawan"> | string
    NamaLengkap?: StringFilter<"Karyawan"> | string
    alamat?: StringFilter<"Karyawan"> | string
    noTelp?: StringFilter<"Karyawan"> | string
    tanggalMasukKaryawan?: DateTimeFilter<"Karyawan"> | Date | string
    vendorId?: IntNullableFilter<"Karyawan"> | number | null
    departemenId?: IntNullableFilter<"Karyawan"> | number | null
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
    GajiPokok?: GajiPokokListRelationFilter
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
  }

  export type KaryawanOrderByWithRelationInput = {
    id?: SortOrder
    nik?: SortOrder
    NamaLengkap?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    tanggalMasukKaryawan?: SortOrder
    vendorId?: SortOrderInput | SortOrder
    departemenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    GajiPokok?: GajiPokokOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
    departemen?: DepartemenOrderByWithRelationInput
    _relevance?: KaryawanOrderByRelevanceInput
  }

  export type KaryawanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nik?: string
    noTelp?: string
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    NamaLengkap?: StringFilter<"Karyawan"> | string
    alamat?: StringFilter<"Karyawan"> | string
    tanggalMasukKaryawan?: DateTimeFilter<"Karyawan"> | Date | string
    vendorId?: IntNullableFilter<"Karyawan"> | number | null
    departemenId?: IntNullableFilter<"Karyawan"> | number | null
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
    GajiPokok?: GajiPokokListRelationFilter
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
  }, "id" | "nik" | "noTelp">

  export type KaryawanOrderByWithAggregationInput = {
    id?: SortOrder
    nik?: SortOrder
    NamaLengkap?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    tanggalMasukKaryawan?: SortOrder
    vendorId?: SortOrderInput | SortOrder
    departemenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KaryawanCountOrderByAggregateInput
    _avg?: KaryawanAvgOrderByAggregateInput
    _max?: KaryawanMaxOrderByAggregateInput
    _min?: KaryawanMinOrderByAggregateInput
    _sum?: KaryawanSumOrderByAggregateInput
  }

  export type KaryawanScalarWhereWithAggregatesInput = {
    AND?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    OR?: KaryawanScalarWhereWithAggregatesInput[]
    NOT?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Karyawan"> | number
    nik?: StringWithAggregatesFilter<"Karyawan"> | string
    NamaLengkap?: StringWithAggregatesFilter<"Karyawan"> | string
    alamat?: StringWithAggregatesFilter<"Karyawan"> | string
    noTelp?: StringWithAggregatesFilter<"Karyawan"> | string
    tanggalMasukKaryawan?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
    vendorId?: IntNullableWithAggregatesFilter<"Karyawan"> | number | null
    departemenId?: IntNullableWithAggregatesFilter<"Karyawan"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
  }

  export type JamKerjaWhereInput = {
    AND?: JamKerjaWhereInput | JamKerjaWhereInput[]
    OR?: JamKerjaWhereInput[]
    NOT?: JamKerjaWhereInput | JamKerjaWhereInput[]
    id?: IntFilter<"JamKerja"> | number
    kodeShift?: StringFilter<"JamKerja"> | string
    jamMasuk?: DateTimeFilter<"JamKerja"> | Date | string
    jamPulang?: DateTimeFilter<"JamKerja"> | Date | string
    createdAt?: DateTimeFilter<"JamKerja"> | Date | string
    updatedAt?: DateTimeFilter<"JamKerja"> | Date | string
  }

  export type JamKerjaOrderByWithRelationInput = {
    id?: SortOrder
    kodeShift?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: JamKerjaOrderByRelevanceInput
  }

  export type JamKerjaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kodeShift?: string
    AND?: JamKerjaWhereInput | JamKerjaWhereInput[]
    OR?: JamKerjaWhereInput[]
    NOT?: JamKerjaWhereInput | JamKerjaWhereInput[]
    jamMasuk?: DateTimeFilter<"JamKerja"> | Date | string
    jamPulang?: DateTimeFilter<"JamKerja"> | Date | string
    createdAt?: DateTimeFilter<"JamKerja"> | Date | string
    updatedAt?: DateTimeFilter<"JamKerja"> | Date | string
  }, "id" | "kodeShift">

  export type JamKerjaOrderByWithAggregationInput = {
    id?: SortOrder
    kodeShift?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JamKerjaCountOrderByAggregateInput
    _avg?: JamKerjaAvgOrderByAggregateInput
    _max?: JamKerjaMaxOrderByAggregateInput
    _min?: JamKerjaMinOrderByAggregateInput
    _sum?: JamKerjaSumOrderByAggregateInput
  }

  export type JamKerjaScalarWhereWithAggregatesInput = {
    AND?: JamKerjaScalarWhereWithAggregatesInput | JamKerjaScalarWhereWithAggregatesInput[]
    OR?: JamKerjaScalarWhereWithAggregatesInput[]
    NOT?: JamKerjaScalarWhereWithAggregatesInput | JamKerjaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JamKerja"> | number
    kodeShift?: StringWithAggregatesFilter<"JamKerja"> | string
    jamMasuk?: DateTimeWithAggregatesFilter<"JamKerja"> | Date | string
    jamPulang?: DateTimeWithAggregatesFilter<"JamKerja"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JamKerja"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JamKerja"> | Date | string
  }

  export type GajiPokokWhereInput = {
    AND?: GajiPokokWhereInput | GajiPokokWhereInput[]
    OR?: GajiPokokWhereInput[]
    NOT?: GajiPokokWhereInput | GajiPokokWhereInput[]
    id?: IntFilter<"GajiPokok"> | number
    jumlahGaji?: DecimalFilter<"GajiPokok"> | Decimal | DecimalJsLike | number | string
    karyawanId?: IntNullableFilter<"GajiPokok"> | number | null
    createdAt?: DateTimeFilter<"GajiPokok"> | Date | string
    updatedAt?: DateTimeFilter<"GajiPokok"> | Date | string
    karyawan?: XOR<KaryawanNullableScalarRelationFilter, KaryawanWhereInput> | null
  }

  export type GajiPokokOrderByWithRelationInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    karyawan?: KaryawanOrderByWithRelationInput
  }

  export type GajiPokokWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GajiPokokWhereInput | GajiPokokWhereInput[]
    OR?: GajiPokokWhereInput[]
    NOT?: GajiPokokWhereInput | GajiPokokWhereInput[]
    jumlahGaji?: DecimalFilter<"GajiPokok"> | Decimal | DecimalJsLike | number | string
    karyawanId?: IntNullableFilter<"GajiPokok"> | number | null
    createdAt?: DateTimeFilter<"GajiPokok"> | Date | string
    updatedAt?: DateTimeFilter<"GajiPokok"> | Date | string
    karyawan?: XOR<KaryawanNullableScalarRelationFilter, KaryawanWhereInput> | null
  }, "id">

  export type GajiPokokOrderByWithAggregationInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GajiPokokCountOrderByAggregateInput
    _avg?: GajiPokokAvgOrderByAggregateInput
    _max?: GajiPokokMaxOrderByAggregateInput
    _min?: GajiPokokMinOrderByAggregateInput
    _sum?: GajiPokokSumOrderByAggregateInput
  }

  export type GajiPokokScalarWhereWithAggregatesInput = {
    AND?: GajiPokokScalarWhereWithAggregatesInput | GajiPokokScalarWhereWithAggregatesInput[]
    OR?: GajiPokokScalarWhereWithAggregatesInput[]
    NOT?: GajiPokokScalarWhereWithAggregatesInput | GajiPokokScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GajiPokok"> | number
    jumlahGaji?: DecimalWithAggregatesFilter<"GajiPokok"> | Decimal | DecimalJsLike | number | string
    karyawanId?: IntNullableWithAggregatesFilter<"GajiPokok"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"GajiPokok"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GajiPokok"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenCreateInput = {
    slugDepartemen: string
    namaDepartemen: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUncheckedCreateInput = {
    id?: number
    slugDepartemen: string
    namaDepartemen: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanUncheckedCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUpdateInput = {
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUncheckedUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenCreateManyInput = {
    id?: number
    slugDepartemen: string
    namaDepartemen: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenUpdateManyMutationInput = {
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlasanLemburCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlasanLemburUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlasanLemburUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlasanLemburUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlasanLemburCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlasanLemburUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlasanLemburUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateInput = {
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokCreateNestedManyWithoutKaryawanInput
    vendor?: VendorCreateNestedOneWithoutKaryawanInput
    departemen?: DepartemenCreateNestedOneWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    vendorId?: number | null
    departemenId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUpdateManyWithoutKaryawanNestedInput
    vendor?: VendorUpdateOneWithoutKaryawanNestedInput
    departemen?: DepartemenUpdateOneWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: NullableIntFieldUpdateOperationsInput | number | null
    departemenId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanCreateManyInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    vendorId?: number | null
    departemenId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: NullableIntFieldUpdateOperationsInput | number | null
    departemenId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamKerjaCreateInput = {
    kodeShift: string
    jamMasuk: Date | string
    jamPulang: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JamKerjaUncheckedCreateInput = {
    id?: number
    kodeShift: string
    jamMasuk: Date | string
    jamPulang: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JamKerjaUpdateInput = {
    kodeShift?: StringFieldUpdateOperationsInput | string
    jamMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jamPulang?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamKerjaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeShift?: StringFieldUpdateOperationsInput | string
    jamMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jamPulang?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamKerjaCreateManyInput = {
    id?: number
    kodeShift: string
    jamMasuk: Date | string
    jamPulang: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JamKerjaUpdateManyMutationInput = {
    kodeShift?: StringFieldUpdateOperationsInput | string
    jamMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jamPulang?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamKerjaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeShift?: StringFieldUpdateOperationsInput | string
    jamMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jamPulang?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokCreateInput = {
    jumlahGaji: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan?: KaryawanCreateNestedOneWithoutGajiPokokInput
  }

  export type GajiPokokUncheckedCreateInput = {
    id?: number
    jumlahGaji: Decimal | DecimalJsLike | number | string
    karyawanId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiPokokUpdateInput = {
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneWithoutGajiPokokNestedInput
  }

  export type GajiPokokUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    karyawanId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokCreateManyInput = {
    id?: number
    jumlahGaji: Decimal | DecimalJsLike | number | string
    karyawanId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiPokokUpdateManyMutationInput = {
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    karyawanId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KaryawanListRelationFilter = {
    every?: KaryawanWhereInput
    some?: KaryawanWhereInput
    none?: KaryawanWhereInput
  }

  export type KaryawanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartemenOrderByRelevanceInput = {
    fields: DepartemenOrderByRelevanceFieldEnum | DepartemenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartemenCountOrderByAggregateInput = {
    id?: SortOrder
    slugDepartemen?: SortOrder
    namaDepartemen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartemenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartemenMaxOrderByAggregateInput = {
    id?: SortOrder
    slugDepartemen?: SortOrder
    namaDepartemen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartemenMinOrderByAggregateInput = {
    id?: SortOrder
    slugDepartemen?: SortOrder
    namaDepartemen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartemenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendorOrderByRelevanceInput = {
    fields: VendorOrderByRelevanceFieldEnum | VendorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    slugVendor?: SortOrder
    namaVendor?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    slugVendor?: SortOrder
    namaVendor?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    slugVendor?: SortOrder
    namaVendor?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlasanLemburOrderByRelevanceInput = {
    fields: AlasanLemburOrderByRelevanceFieldEnum | AlasanLemburOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlasanLemburCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlasanLemburAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlasanLemburMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlasanLemburMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlasanLemburSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GajiPokokListRelationFilter = {
    every?: GajiPokokWhereInput
    some?: GajiPokokWhereInput
    none?: GajiPokokWhereInput
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type DepartemenNullableScalarRelationFilter = {
    is?: DepartemenWhereInput | null
    isNot?: DepartemenWhereInput | null
  }

  export type GajiPokokOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KaryawanOrderByRelevanceInput = {
    fields: KaryawanOrderByRelevanceFieldEnum | KaryawanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KaryawanCountOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    NamaLengkap?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    tanggalMasukKaryawan?: SortOrder
    vendorId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    departemenId?: SortOrder
  }

  export type KaryawanMaxOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    NamaLengkap?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    tanggalMasukKaryawan?: SortOrder
    vendorId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanMinOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    NamaLengkap?: SortOrder
    alamat?: SortOrder
    noTelp?: SortOrder
    tanggalMasukKaryawan?: SortOrder
    vendorId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    departemenId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JamKerjaOrderByRelevanceInput = {
    fields: JamKerjaOrderByRelevanceFieldEnum | JamKerjaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JamKerjaCountOrderByAggregateInput = {
    id?: SortOrder
    kodeShift?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JamKerjaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JamKerjaMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeShift?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JamKerjaMinOrderByAggregateInput = {
    id?: SortOrder
    kodeShift?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JamKerjaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type KaryawanNullableScalarRelationFilter = {
    is?: KaryawanWhereInput | null
    isNot?: KaryawanWhereInput | null
  }

  export type GajiPokokCountOrderByAggregateInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiPokokAvgOrderByAggregateInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrder
  }

  export type GajiPokokMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiPokokMinOrderByAggregateInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiPokokSumOrderByAggregateInput = {
    id?: SortOrder
    jumlahGaji?: SortOrder
    karyawanId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KaryawanCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput> | KaryawanCreateWithoutDepartemenInput[] | KaryawanUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutDepartemenInput | KaryawanCreateOrConnectWithoutDepartemenInput[]
    createMany?: KaryawanCreateManyDepartemenInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type KaryawanUncheckedCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput> | KaryawanCreateWithoutDepartemenInput[] | KaryawanUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutDepartemenInput | KaryawanCreateOrConnectWithoutDepartemenInput[]
    createMany?: KaryawanCreateManyDepartemenInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type KaryawanUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput> | KaryawanCreateWithoutDepartemenInput[] | KaryawanUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutDepartemenInput | KaryawanCreateOrConnectWithoutDepartemenInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutDepartemenInput | KaryawanUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: KaryawanCreateManyDepartemenInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutDepartemenInput | KaryawanUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutDepartemenInput | KaryawanUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type KaryawanUncheckedUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput> | KaryawanCreateWithoutDepartemenInput[] | KaryawanUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutDepartemenInput | KaryawanCreateOrConnectWithoutDepartemenInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutDepartemenInput | KaryawanUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: KaryawanCreateManyDepartemenInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutDepartemenInput | KaryawanUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutDepartemenInput | KaryawanUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type KaryawanCreateNestedManyWithoutVendorInput = {
    create?: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput> | KaryawanCreateWithoutVendorInput[] | KaryawanUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutVendorInput | KaryawanCreateOrConnectWithoutVendorInput[]
    createMany?: KaryawanCreateManyVendorInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type KaryawanUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput> | KaryawanCreateWithoutVendorInput[] | KaryawanUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutVendorInput | KaryawanCreateOrConnectWithoutVendorInput[]
    createMany?: KaryawanCreateManyVendorInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type KaryawanUpdateManyWithoutVendorNestedInput = {
    create?: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput> | KaryawanCreateWithoutVendorInput[] | KaryawanUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutVendorInput | KaryawanCreateOrConnectWithoutVendorInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutVendorInput | KaryawanUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: KaryawanCreateManyVendorInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutVendorInput | KaryawanUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutVendorInput | KaryawanUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type KaryawanUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput> | KaryawanCreateWithoutVendorInput[] | KaryawanUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutVendorInput | KaryawanCreateOrConnectWithoutVendorInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutVendorInput | KaryawanUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: KaryawanCreateManyVendorInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutVendorInput | KaryawanUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutVendorInput | KaryawanUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type GajiPokokCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput> | GajiPokokCreateWithoutKaryawanInput[] | GajiPokokUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiPokokCreateOrConnectWithoutKaryawanInput | GajiPokokCreateOrConnectWithoutKaryawanInput[]
    createMany?: GajiPokokCreateManyKaryawanInputEnvelope
    connect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutKaryawanInput = {
    create?: XOR<VendorCreateWithoutKaryawanInput, VendorUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: VendorCreateOrConnectWithoutKaryawanInput
    connect?: VendorWhereUniqueInput
  }

  export type DepartemenCreateNestedOneWithoutKaryawanInput = {
    create?: XOR<DepartemenCreateWithoutKaryawanInput, DepartemenUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutKaryawanInput
    connect?: DepartemenWhereUniqueInput
  }

  export type GajiPokokUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput> | GajiPokokCreateWithoutKaryawanInput[] | GajiPokokUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiPokokCreateOrConnectWithoutKaryawanInput | GajiPokokCreateOrConnectWithoutKaryawanInput[]
    createMany?: GajiPokokCreateManyKaryawanInputEnvelope
    connect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
  }

  export type GajiPokokUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput> | GajiPokokCreateWithoutKaryawanInput[] | GajiPokokUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiPokokCreateOrConnectWithoutKaryawanInput | GajiPokokCreateOrConnectWithoutKaryawanInput[]
    upsert?: GajiPokokUpsertWithWhereUniqueWithoutKaryawanInput | GajiPokokUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: GajiPokokCreateManyKaryawanInputEnvelope
    set?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    disconnect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    delete?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    connect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    update?: GajiPokokUpdateWithWhereUniqueWithoutKaryawanInput | GajiPokokUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: GajiPokokUpdateManyWithWhereWithoutKaryawanInput | GajiPokokUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: GajiPokokScalarWhereInput | GajiPokokScalarWhereInput[]
  }

  export type VendorUpdateOneWithoutKaryawanNestedInput = {
    create?: XOR<VendorCreateWithoutKaryawanInput, VendorUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: VendorCreateOrConnectWithoutKaryawanInput
    upsert?: VendorUpsertWithoutKaryawanInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutKaryawanInput, VendorUpdateWithoutKaryawanInput>, VendorUncheckedUpdateWithoutKaryawanInput>
  }

  export type DepartemenUpdateOneWithoutKaryawanNestedInput = {
    create?: XOR<DepartemenCreateWithoutKaryawanInput, DepartemenUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutKaryawanInput
    upsert?: DepartemenUpsertWithoutKaryawanInput
    disconnect?: DepartemenWhereInput | boolean
    delete?: DepartemenWhereInput | boolean
    connect?: DepartemenWhereUniqueInput
    update?: XOR<XOR<DepartemenUpdateToOneWithWhereWithoutKaryawanInput, DepartemenUpdateWithoutKaryawanInput>, DepartemenUncheckedUpdateWithoutKaryawanInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GajiPokokUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput> | GajiPokokCreateWithoutKaryawanInput[] | GajiPokokUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiPokokCreateOrConnectWithoutKaryawanInput | GajiPokokCreateOrConnectWithoutKaryawanInput[]
    upsert?: GajiPokokUpsertWithWhereUniqueWithoutKaryawanInput | GajiPokokUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: GajiPokokCreateManyKaryawanInputEnvelope
    set?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    disconnect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    delete?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    connect?: GajiPokokWhereUniqueInput | GajiPokokWhereUniqueInput[]
    update?: GajiPokokUpdateWithWhereUniqueWithoutKaryawanInput | GajiPokokUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: GajiPokokUpdateManyWithWhereWithoutKaryawanInput | GajiPokokUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: GajiPokokScalarWhereInput | GajiPokokScalarWhereInput[]
  }

  export type KaryawanCreateNestedOneWithoutGajiPokokInput = {
    create?: XOR<KaryawanCreateWithoutGajiPokokInput, KaryawanUncheckedCreateWithoutGajiPokokInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutGajiPokokInput
    connect?: KaryawanWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type KaryawanUpdateOneWithoutGajiPokokNestedInput = {
    create?: XOR<KaryawanCreateWithoutGajiPokokInput, KaryawanUncheckedCreateWithoutGajiPokokInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutGajiPokokInput
    upsert?: KaryawanUpsertWithoutGajiPokokInput
    disconnect?: KaryawanWhereInput | boolean
    delete?: KaryawanWhereInput | boolean
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutGajiPokokInput, KaryawanUpdateWithoutGajiPokokInput>, KaryawanUncheckedUpdateWithoutGajiPokokInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type KaryawanCreateWithoutDepartemenInput = {
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokCreateNestedManyWithoutKaryawanInput
    vendor?: VendorCreateNestedOneWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutDepartemenInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    vendorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutDepartemenInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput>
  }

  export type KaryawanCreateManyDepartemenInputEnvelope = {
    data: KaryawanCreateManyDepartemenInput | KaryawanCreateManyDepartemenInput[]
    skipDuplicates?: boolean
  }

  export type KaryawanUpsertWithWhereUniqueWithoutDepartemenInput = {
    where: KaryawanWhereUniqueInput
    update: XOR<KaryawanUpdateWithoutDepartemenInput, KaryawanUncheckedUpdateWithoutDepartemenInput>
    create: XOR<KaryawanCreateWithoutDepartemenInput, KaryawanUncheckedCreateWithoutDepartemenInput>
  }

  export type KaryawanUpdateWithWhereUniqueWithoutDepartemenInput = {
    where: KaryawanWhereUniqueInput
    data: XOR<KaryawanUpdateWithoutDepartemenInput, KaryawanUncheckedUpdateWithoutDepartemenInput>
  }

  export type KaryawanUpdateManyWithWhereWithoutDepartemenInput = {
    where: KaryawanScalarWhereInput
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyWithoutDepartemenInput>
  }

  export type KaryawanScalarWhereInput = {
    AND?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
    OR?: KaryawanScalarWhereInput[]
    NOT?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
    id?: IntFilter<"Karyawan"> | number
    nik?: StringFilter<"Karyawan"> | string
    NamaLengkap?: StringFilter<"Karyawan"> | string
    alamat?: StringFilter<"Karyawan"> | string
    noTelp?: StringFilter<"Karyawan"> | string
    tanggalMasukKaryawan?: DateTimeFilter<"Karyawan"> | Date | string
    vendorId?: IntNullableFilter<"Karyawan"> | number | null
    departemenId?: IntNullableFilter<"Karyawan"> | number | null
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
  }

  export type KaryawanCreateWithoutVendorInput = {
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokCreateNestedManyWithoutKaryawanInput
    departemen?: DepartemenCreateNestedOneWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutVendorInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    departemenId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GajiPokok?: GajiPokokUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutVendorInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput>
  }

  export type KaryawanCreateManyVendorInputEnvelope = {
    data: KaryawanCreateManyVendorInput | KaryawanCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type KaryawanUpsertWithWhereUniqueWithoutVendorInput = {
    where: KaryawanWhereUniqueInput
    update: XOR<KaryawanUpdateWithoutVendorInput, KaryawanUncheckedUpdateWithoutVendorInput>
    create: XOR<KaryawanCreateWithoutVendorInput, KaryawanUncheckedCreateWithoutVendorInput>
  }

  export type KaryawanUpdateWithWhereUniqueWithoutVendorInput = {
    where: KaryawanWhereUniqueInput
    data: XOR<KaryawanUpdateWithoutVendorInput, KaryawanUncheckedUpdateWithoutVendorInput>
  }

  export type KaryawanUpdateManyWithWhereWithoutVendorInput = {
    where: KaryawanScalarWhereInput
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyWithoutVendorInput>
  }

  export type GajiPokokCreateWithoutKaryawanInput = {
    jumlahGaji: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiPokokUncheckedCreateWithoutKaryawanInput = {
    id?: number
    jumlahGaji: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiPokokCreateOrConnectWithoutKaryawanInput = {
    where: GajiPokokWhereUniqueInput
    create: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput>
  }

  export type GajiPokokCreateManyKaryawanInputEnvelope = {
    data: GajiPokokCreateManyKaryawanInput | GajiPokokCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutKaryawanInput = {
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUncheckedCreateWithoutKaryawanInput = {
    id?: number
    slugVendor: string
    namaVendor: string
    alamat: string
    noTelp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorCreateOrConnectWithoutKaryawanInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutKaryawanInput, VendorUncheckedCreateWithoutKaryawanInput>
  }

  export type DepartemenCreateWithoutKaryawanInput = {
    slugDepartemen: string
    namaDepartemen: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenUncheckedCreateWithoutKaryawanInput = {
    id?: number
    slugDepartemen: string
    namaDepartemen: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenCreateOrConnectWithoutKaryawanInput = {
    where: DepartemenWhereUniqueInput
    create: XOR<DepartemenCreateWithoutKaryawanInput, DepartemenUncheckedCreateWithoutKaryawanInput>
  }

  export type GajiPokokUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: GajiPokokWhereUniqueInput
    update: XOR<GajiPokokUpdateWithoutKaryawanInput, GajiPokokUncheckedUpdateWithoutKaryawanInput>
    create: XOR<GajiPokokCreateWithoutKaryawanInput, GajiPokokUncheckedCreateWithoutKaryawanInput>
  }

  export type GajiPokokUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: GajiPokokWhereUniqueInput
    data: XOR<GajiPokokUpdateWithoutKaryawanInput, GajiPokokUncheckedUpdateWithoutKaryawanInput>
  }

  export type GajiPokokUpdateManyWithWhereWithoutKaryawanInput = {
    where: GajiPokokScalarWhereInput
    data: XOR<GajiPokokUpdateManyMutationInput, GajiPokokUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type GajiPokokScalarWhereInput = {
    AND?: GajiPokokScalarWhereInput | GajiPokokScalarWhereInput[]
    OR?: GajiPokokScalarWhereInput[]
    NOT?: GajiPokokScalarWhereInput | GajiPokokScalarWhereInput[]
    id?: IntFilter<"GajiPokok"> | number
    jumlahGaji?: DecimalFilter<"GajiPokok"> | Decimal | DecimalJsLike | number | string
    karyawanId?: IntNullableFilter<"GajiPokok"> | number | null
    createdAt?: DateTimeFilter<"GajiPokok"> | Date | string
    updatedAt?: DateTimeFilter<"GajiPokok"> | Date | string
  }

  export type VendorUpsertWithoutKaryawanInput = {
    update: XOR<VendorUpdateWithoutKaryawanInput, VendorUncheckedUpdateWithoutKaryawanInput>
    create: XOR<VendorCreateWithoutKaryawanInput, VendorUncheckedCreateWithoutKaryawanInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutKaryawanInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutKaryawanInput, VendorUncheckedUpdateWithoutKaryawanInput>
  }

  export type VendorUpdateWithoutKaryawanInput = {
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugVendor?: StringFieldUpdateOperationsInput | string
    namaVendor?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUpsertWithoutKaryawanInput = {
    update: XOR<DepartemenUpdateWithoutKaryawanInput, DepartemenUncheckedUpdateWithoutKaryawanInput>
    create: XOR<DepartemenCreateWithoutKaryawanInput, DepartemenUncheckedCreateWithoutKaryawanInput>
    where?: DepartemenWhereInput
  }

  export type DepartemenUpdateToOneWithWhereWithoutKaryawanInput = {
    where?: DepartemenWhereInput
    data: XOR<DepartemenUpdateWithoutKaryawanInput, DepartemenUncheckedUpdateWithoutKaryawanInput>
  }

  export type DepartemenUpdateWithoutKaryawanInput = {
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    slugDepartemen?: StringFieldUpdateOperationsInput | string
    namaDepartemen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateWithoutGajiPokokInput = {
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutKaryawanInput
    departemen?: DepartemenCreateNestedOneWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutGajiPokokInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    vendorId?: number | null
    departemenId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanCreateOrConnectWithoutGajiPokokInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutGajiPokokInput, KaryawanUncheckedCreateWithoutGajiPokokInput>
  }

  export type KaryawanUpsertWithoutGajiPokokInput = {
    update: XOR<KaryawanUpdateWithoutGajiPokokInput, KaryawanUncheckedUpdateWithoutGajiPokokInput>
    create: XOR<KaryawanCreateWithoutGajiPokokInput, KaryawanUncheckedCreateWithoutGajiPokokInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutGajiPokokInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutGajiPokokInput, KaryawanUncheckedUpdateWithoutGajiPokokInput>
  }

  export type KaryawanUpdateWithoutGajiPokokInput = {
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutKaryawanNestedInput
    departemen?: DepartemenUpdateOneWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutGajiPokokInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: NullableIntFieldUpdateOperationsInput | number | null
    departemenId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateManyDepartemenInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    vendorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanUpdateWithoutDepartemenInput = {
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUpdateManyWithoutKaryawanNestedInput
    vendor?: VendorUpdateOneWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutDepartemenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateManyWithoutDepartemenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateManyVendorInput = {
    id?: number
    nik: string
    NamaLengkap: string
    alamat: string
    noTelp: string
    tanggalMasukKaryawan: Date | string
    departemenId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanUpdateWithoutVendorInput = {
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUpdateManyWithoutKaryawanNestedInput
    departemen?: DepartemenUpdateOneWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    departemenId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GajiPokok?: GajiPokokUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    NamaLengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    tanggalMasukKaryawan?: DateTimeFieldUpdateOperationsInput | Date | string
    departemenId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokCreateManyKaryawanInput = {
    id?: number
    jumlahGaji: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiPokokUpdateWithoutKaryawanInput = {
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiPokokUncheckedUpdateManyWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlahGaji?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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