//耗时40分钟，收益约0.5元
launchApp("返利");
var sh = new Shell(true);
sleep(3500);
click("跳过");
sleep(4000);
//click("签到赚钱");
back();
sleep(3000);
Tap(900,120);
sleep(4500);
click("边看火山热门视频边赚钱");
toastLog("开始刷取200条返利视频");
for (var i= 1; i<=205; i++)
{
    sleep(10000);
    swipe(800,1600,800,286,666);
    toastLog("当前进度："+i+"/205");
}

sh.exec("am force-stop "+getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利视频】已完成计划任务并退出APP！");