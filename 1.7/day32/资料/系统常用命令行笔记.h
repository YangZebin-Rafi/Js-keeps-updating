Windows / Linux(服务器) /Unix     /Mac OSX

pwd [Print Working Directory]
    /* 作用：查看当前目录 */

cd [Change Directory]
    // 作用：切换目录    
    // 示例01：cd  目录   进入到指定目录
    // 示例02：cd  ../   返回上一层目录

ls [List]
    // 作用：查看当前目录下内容
    // 参数：usage: ls [-ABCFGHLOPRSTUWabcdefghiklmnopqrstuwx1] [file ...]
    // 示例01：ls    列出当前目录下面的所有文件
    // 示例02：ls -a 列出当前目录下面的所有文件(包含隐藏文件)
    // 示例03：ls -l 列出当前目录下面的所有文件(列表方式)，包含文件的创建者和时间等信息
    // 示例04：ls -s 列出当前目录下面的所有文件(打印文件的大小)
    // 示例05：ls -t 列出当前目录下面的所有文件(按照时间来排序)
    // 示例06：ls -S 列出当前目录下面的所有文件(包括子目录递归)  [备注:windows电脑似乎没有用]

mkdir [Make Directory]
    // 作用：创建目录
    // 参数：usage: mkdir [-pv] [-m mode] directory ...
    // 示例01：mkdir Demo          创建Demo文件夹(目录)
    // 示例02：mkdir -v demo       创建demo文件夹并输出提示信息
    // 示例03：mkdir -p test/sub1  创建test文件夹并在该目录中创建sub1文件夹

touch  
    // 作用：创建文件
    // 示例01：touch index.html    在当前目录中创建index.html文件

wc [Word Count] 
    // 作用：获取文件的字数信息统计
    // 参数：usage: wc [-clmw] [file ...]
    // 示例01：wc a.text           获取a.text文件的字数统计信息
    // 示例02：wc -c a.text        获取a.text文件的字数统计信息(统计字节数)
    // 示例03：wc -l a.text        获取a.text文件的字数统计信息(统计行数，从0开始计数)
    // 示例04：wc -m a.text        获取a.text文件的字数统计信息(统计字符数)
    // 示例05：wc -w a.text        获取a.text文件的字数统计信息(统计单词数)

echo
    // 作用：输出字符串
    // 示例01: echo "123" >  a.text  向a.text文件中输入123字符串(替换)
    // 示例02: echo "123" >> a.text  向a.text文件中输入123字符串(追加)

cat [Concatenate files and print on the standard output]
    // 作用：查看|创建|合并文件
    // 示例01：cat index.html              打印并查看index.html文件的内容
    // 示例02：cat > b.text                新建文件b.text并输入内容，需保存
    // 示例03：cat a.text b.text > c.text  合并两个文件的内容给c.text 
    // 示例04：cat -n a.text               输出a.text文件的内容并显示行号(空行会被编号)
    // 示例05：cat -b a.text               输出a.text文件的内容并显示行号(空行不被编号)   备注:NO
    // 示例06：cat -n b.text >> a.text     对b.text文件的内容加上行号然后追加到a.text文件中
    // 示例07：cat -n b.text > a.text      对b.text文件的内容加上行号然后替换a.text文件的内容

more和less [没有这个命令]
    // 作用：查看文件
    // 示例01：more +3 a.text              从第三行开始查看a.text文件的内容
    // 示例02：more +/font a.text          搜索文件中指定字符串显示指定位置后的内容
    // 示例03：less -N a.text              显示a.text文件的内容前面加上行号

rm[remove]
    // 作用：删除文件 Recurve(递归)
    // 参数：usage: rm [-f | -i] [-dPRrvW] file ...
    // 示例01： rm a.text                  删除a.text文件
    // 示例02： rm -i a.text               删除文件前会逐一询问确认，输入YES表示删除
    // 示例03： rm -f a.text               强制删除a.text文件不会询问确认
    // 示例04： rm -r test                 删除test文件夹以及该目录下面所有文件
    // 示例05： rm -r *                    删除当前目录下面所有的文件
    // [核武器]示例06： rm -rf /*           递归删除所有文件(不提醒)

rmdir (Remove Directory) 
    // 作用：删除文件夹，只能删除空文件夹，不常用
    // 示例01：rmdir a                     删除文件夹a

clear 清屏操作
mv [move]
    // 作用：移动文件或重命名
    // 示例01：mv index.html ./demo/index.html
    // 示例02：mv index.html a.html 

cp [copy] 
    // 作用：复制文件
    // 示例01：cp index.html ./demo/index.html

history     查看操作历史
curl        发送网络请求
who am i    查看当前用户信息(No)
tab         自动补全，连按两次会将所有匹配内容显示出来
