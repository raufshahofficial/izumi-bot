apt update && apt upgrade -y && pkg install wget openssl-tool proot -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh
./start-ubuntu.sh
apt update && apt upgrade
apt install sudo
sudo apt install ffmpeg
sudo apt install imagemagick
sudo apt install yarn
sudo apt install git
sudo apt install curl
sudo apt -y remove nodejs
curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
