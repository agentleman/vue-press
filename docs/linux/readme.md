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