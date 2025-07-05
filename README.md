|                                                        |
| ------------------------------------------------------ |
| [gitee repo](https://gitee.com/pkmer/llm-job-prep)     |
| [github repo](https://github.com/upangka/llm-job-prep) |

```sh
# 分别推送 到 Gitee 和 GitHub
git push origin main   # 推送到 Gitee
git push github main   # 推送到 GitHub
```

# 同时推送到多个仓库

> 向远程名为 origin 的远程仓库，添加一个额外的推送地址

```sh
# 配置一个新的“组合远程”：
git remote set-url --add --push origin git@gitee.com:pkmer/llm-job-prep.git
git remote set-url --add --push origin git@github.com:upangka/llm-job-prep.git

# 同时提交到两个远程仓库
git push origin main
```
