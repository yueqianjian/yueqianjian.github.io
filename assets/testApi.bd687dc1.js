import{b as e,e as s,q as t,f as l,o as a,g as i,k as n,m as p,t as o,l as u,A as d}from"./vendor.66baf106.js";const r={data:()=>({gitUrl:"https://github.com/yueqianjian/koa-server",vfile:"",getRes:"",postRes:"",uploadRes:""}),methods:{testApi(){this.eidtUser()},getFile(e){this.vfile=e.target.files[0]},async getUserList(){const{getUserList:e}=this.$api.user,s=await e();this.getRes=s},async uploadFile(){const{uploadFile:e}=this.$api.user;let s=new FormData;s.append("username","Groucho"),s.append("accountnum",123456),s.append("file",this.vfile);let t=s;const l=await e(t);this.uploadRes=l},async eidtUser(){const{eidtUser:e}=this.$api.user;const s=await e({a:1,b:{c:[2]}});this.postRes=s}}},c=u("data-v-821d999e");e("data-v-821d999e");const h=p("h2",null," 该项目本身不提供后端服务，以下项目为node.js的Koa框架的后端服务，该页面仅为实现Get,Post请求,文件上传接口测试 ",-1),g=p("p",null,"tip:没必要也没钱去购买云服务器，只能酱紫了",-1),m=p("span",{class:"title"},"项目地址：",-1),f=p("span",{class:"title"},"GET",-1),v=d("测试接口"),U=p("span",{class:"title"},"POST",-1),R=d("测试接口"),k=p("span",{class:"title"},"UPLOAD",-1),C=d("测试接口");s();const F=c(((e,s,u,d,r,F)=>{const b=t("el-button"),x=l("pm");return a(),i("div",null,[h,g,n(p("p",null,[m,p("a",{href:r.gitUrl},o(r.gitUrl),9,["href"])],512),[[x,"40px 0 0","m"]]),n(p("div",null,[p("p",null,[f,p(b,{size:"small",onClick:F.getUserList},{default:c((()=>[v])),_:1},8,["onClick"])]),p("p",null,o(r.getRes),1)],512),[[x,"20px 0 0","m"]]),n(p("div",null,[p("p",null,[U,p(b,{size:"small",onClick:F.eidtUser},{default:c((()=>[R])),_:1},8,["onClick"])]),p("p",null,o(r.postRes),1)],512),[[x,"20px 0 0","m"]]),n(p("div",null,[p("p",null,[k,p("input",{type:"file",onChange:s[1]||(s[1]=(...e)=>F.getFile&&F.getFile(...e))},null,32),p(b,{size:"small",onClick:F.uploadFile},{default:c((()=>[C])),_:1},8,["onClick"])]),p("p",null,o(r.uploadRes),1)],512),[[x,"20px 0 0","m"]])])}));r.render=F,r.__scopeId="data-v-821d999e";export default r;
