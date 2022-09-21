# linux

#### 在CentOS 8上安装Nginx
```sh
sudo yum install nginx 
```

#### 安装完成后，使用以下命令启用并启动Nginx服务：
```sh
sudo systemctl enable nginx 
sudo systemctl start nginx  
```
#### 要验证服务是否正在运行，请检查其状态：
```sh
sudo systemctl status nginx 
```

#### FirewallD是Centos 8上的默认防火墙解决方案。在安装过程中，Nginx使用预定义的规则创建防火墙服务文件，以允许访问HTTP（80）和HTTPS（443）端口。使用以下命令永久打开必要的端口：
```sh
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

#### nginx关闭
```
nginx -s stop  :快速停止nginx
nginx -s quit  ：完整有序的停止nginx
```

#### linux删除文件夹目录
```
rm -rf '文件名'
```
#### Linux回到根目录
```
cd /
```
#### forever守护node进程
```js
//显示所有运行的服务
forever list
//停止所有运行的node App
forever stopall
//重新启动所有
forever restartall
```

#### Linux查看进程、线程
```sh
ps -ef   进程
ps -efL  线程
```

#### 安装最新的Jenkins稳定版本：
```sh
sudo dnf install jenkins
```

#### 启动Jenkins服务并启用它以在系统引导时启动：
```sh
sudo systemctl start jenkins
sudo systemctl enable jenkins
```
检查Jenkins是否正在运行
```sh
systemctl status jenkins
```
#### 使用yum命令进行卸载java
```sh
yum remove java-1.6.0-openjdk*

yum remove java-1.7.0-openjdk*
```
#### 查看java安装信息
```sh 
rpm -qa|grep java
```

#### rpm卸载jenkins
```sh
rpm -e jenkins
```

#### 检查是否卸载jenkins成功
```sh
rpm -ql jenkins
```

#### 彻底删除jenkins残留文件
```sh
find / -iname jenkins | xargs -n 1000 rm -rf
```














