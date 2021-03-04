# Docs 命令

#### 查看命令

```
help
有关某个命令的详细信息，请键入 HELP 命令名
ASSOC 显示或修改文件扩展名关联。
ATTRIB 显示或更改文件属性。
BREAK 设置或清除扩展式 CTRL+C 检查。
BCDEDIT 设置启动数据库中的属性以控制启动加载。
```

#### 删除一个或者数个文件

```
del /?

DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names
ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names
```

#### 查看目录

```
dir

DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names
ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names
```

#### 递归查看目录 tree

```
tree
文件夹 PATH 列表
卷序列号为 0003-F93C
F:.
├─conf
├─contrib
│  ├─unicode2nginx
│  └─vim
│      ├─ftdetect
│      ├─ftplugin
│      ├─indent
│      └─syntax
├─docs
```

## 打开图形化界面

#### 打开当前目录

```
ecplorer .

```

#### 打开上级目录

```
ecplorer ..

```

#### 打开指定目录

```
ecplorer dirName

```

## 创建及删除目录

#### 创建

```
mkdir test
```

#### 创建

```
md test
```

#### 删除目录

```
rd d/ test
```

#### 查看文件

```
$ type index.html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
```

#### 打开计算器

```
rd d/ test
```

#### 打开画板

```
mspaint
```

#### 打开记事本

```
notepad
```

#### 查看系统笨笨

```
winver
```

#### 查看注册表

```
regedit
```

#### 查看 ip 配置

```
ipconfig
```

#### 查看网络连接情况

```
ping baidu.com

ping 168.193.3.45
```

#### 打开计算器

```
rd d/ test
```

#### 查看执行程序安装路径

```
where node
E:\Program Files\nodejs\node.exe
```

#### 查看端口占用情况

```
netstat -aon|findstr "3001"
  TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       1524
  TCP    127.0.0.1:3001         127.0.0.1:49599        ESTABLISHED     1524
  TCP    127.0.0.1:49599        127.0.0.1:3001         ESTABLISHED     5524
```

#### 查看任务信息

```
$ tasklist | findstr "5524"
chrome.exe                    5524 Console                    3    127,512 K
```

#### 杀死进程

```
taskkill /pid 5524
```

#### 远程连接

```
mstsc
```