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

### java
#### 使用yum命令进行卸载java
```sh
yum remove java-1.6.0-openjdk*

yum remove java-1.7.0-openjdk*
```

#### java安装
```sh
sudo dnf install java-1.8.0-openjdk-devel
```

#### 查看java安装信息
```sh 
rpm -qa|grep java
```

#### 查看可安装的Java版本
```sh 
yum -y list java*
```
### jenkins
#### 安装最新的Jenkins稳定版本：
```sh
sudo dnf install jenkins
或
sudo yum install jenkins
```

#### 启动Jenkins服务并启用它以在系统引导时启动：
```sh
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

#### 检查Jenkins是否正在运行
```sh
systemctl status jenkins
```

#### 服务资源重载
```sh
systemctl daemon-reload
```
#### 关闭Jenkins服务
```sh
service jenkins stop
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

#### 删除/webapps/jenkins下所有文件
```sh
rm -rf jenkins
```

#### 删除jenkins配置文件
```sh
rm -rf /root/.jenkins/
```
### Docker
#### 执行以下命令，添加 Docker 软件源
```sh
dnf config-manager --add-repo=http://mirrors.tencent.com/docker-ce/linux/centos/docker-ce.repo
```

#### 执行以下命令，查看已添加的 Docker 软件源。
```sh
dnf list docker-ce
```

#### 执行以下命令，安装 Docker
```sh
dnf install -y docker-ce --nobest
```

#### 运行 Docker。
```sh
systemctl start docker
```

#### 检查安装结果。
```sh
docker info
```

#### 运行 Docker 守护进程
```sh
systemctl start docker
```

#### 停止 Docker 守护进程
```sh
systemctl stop docker
```

#### 重启 Docker 守护进程
```sh
systemctl restart docker
```

#### 使用命令查看docker的状态
```sh
sudo systemctl status docker
```
#### 使用命令进行查看运行的docker
```sh
sudo docker ps
```
#### 使用命令进行停止，可以多执行几次，保证停止，
```sh
sudo systemctl stop docker
```
#### 使用命令进行重新启动，
```sh
sudo systemctl daemon-reload
```
















