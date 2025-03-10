## prismaClientのimport
export defaultは
import xxx from "...."　でok

export constは
import {xxx} from "...."

constは複数の値をエクスポートできるから{}で指定する必要がある。

今のprismaClientは {} の方

## Supabase の select メソッドで リレーション込みで取得
https://supabase.com/docs/reference/javascript/typescript-support