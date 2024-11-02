---
id: bluoothctl
aliases: []
tags: []
area: ""
project: ""
---

## install bluetooth

```
yay -Sy bluez bluez-utils
```

## start & connect bluetooth

```
bluetoothctl
default-agent
trust <Mac address>
pair <Mac address>
connect <Mac address>
```
