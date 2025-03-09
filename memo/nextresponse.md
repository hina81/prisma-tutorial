# NextResponse
従来のresponseには無かった、便利な機能が使えるらしい。

例えば
set(name,value),get(name),**getAll(name)**はNextRequestと同様

### json():指定されたjsonの型を持つレスポンスを生成する

import {NextResponse} from 'next/server'

export async function GET(request:Request){
return NextResponse.json({error:'Internal Server Error'},{status:500})

// {error:'Internal Server Error'},{status:500}この型のjsonを返す
}

### redirect():書かれたURLへ移動させるレスポンスを生成する

return NextResponse.redirect(new URL('/new',request.url))
