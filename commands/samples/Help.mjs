class MyHelpCommand(commands.HelpCommand):

    def __init__(self):
        super().__init__(
            show_hidden=False, # 隠しコマンドを表示するかどうか
            command_attrs={"brief": "ヘルプを表示"} # ヘルプコマンドの説明
        )


    async def send_bot_help(self, mapping: Mapping[Optional[commands.Cog], list[commands.Command]]) -> None:
        """引数なしでヘルプコマンドを実行したときに表示されるヘルプメッセージ ($helpみたいな)

        Parameters
        ----------
        mapping : Mapping[Optional[commands.Cog], list[commands.Command]]
            ヘルプのためにユーザーから要求されたコマンドへのコグのマッピング。
            マッピングのキーはコマンドが属する Cog です。値がない場合は None になり、そのコグに属するコマンドのリストになります。
        """
        e = discord.Embed(title="ヘルプ", description="コマンドの使い方")

        cmds = mapping[None] # コマンドのリストを取得 (Cogを使わないのでNoneを指定)

        for command in (await self.filter_commands(cmds)): # 隠しコマンドを除外
            e.add_field(name=command.name, value=f'> {command.brief}', inline=False)

        await self.get_destination().send(embed=e) # ヘルプメッセージを送信


bot = commands.Bot(
    command_prefix="$",
    help_command=MyHelpCommand(),
    case_insensitive=True, # 大文字小文字を区別しない ($help と $Help は同じ)
    intents=discord.Intents.all() # botの権限
)

@bot.event
async def on_ready():
    """botが起動したときに実行されるイベント"""""
    print("ready")


@bot.command(
    name="hello",
    hidden=False,
    brief="挨拶をする"
)
async def hello(ctx: commands.Context):
    """$hello と実行すると挨拶をするコマンド"""
    await ctx.send("hello")


@bot.command(
    name="bye",
    hidden=True, # 隠しコマンド
    brief="別れ挨拶をする"
)
async def bye(ctx: commands.Context):
    """$bye と実行すると別れ挨拶をするコマンド"""
    await ctx.send("bye")