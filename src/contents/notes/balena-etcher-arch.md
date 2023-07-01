---
author: Haikel
title: Cara Install dan Menggunakan Balena Etcher di Arch Linux
tags:
  - linux
date: 2021-10-03
description: Menginstall Balena Etcher di Arch Based dan Penggunaannya
---

## A. Pendahuluan

Balena Etcher adalah salah satu program yang sering dipakai untuk membuat bootable FD karena praktis dan mudah digunakan. Balena Etcher juga gratis dan open source.

## B. Proses

Oke kita langsung ke tahapannya:

- Untuk menginstall Balena Etcher di Arch based, kita akan memilih binary releasenya aja. Masuk ke terminal, kemudian ketikkan:

```sh
yay -S etcher-bin
```

- Silahkan masukkan password anda jika diminta.

- Perlu diingat, prosesnya ini agak lama, jadi kalian bisa melakukan aktivitas lain dulu atau sambil ngopi :D .

![proses instalasi balena etcher](https://ik.imagekit.io/haikelz/blog/balena-etcher-arch/sc2.png?updatedAt=1688206195911)

Nah setelah terinstall, kita akan mencoba menggunakan Balena Etcher ini untuk membuat bootable. Disini saya akan membuat bootable Archcraft di FD 16gb.

- Buka Balena Etcher.
- Klik "Flash from file", kemudian kalian pilih file iso yang sudah disiapkan.
- Setelah itu pilih "Select Target", kemudian pilih FD yang sudah kalian masukkan.

![using balena etcher](https://ik.imagekit.io/haikelz/blog/balena-etcher-arch/sc4.png?updatedAt=1688206195950)

- Prosesnya sendiri membutuhkan waktu beberapa menit(mungkin sekitar 5 menit atau lebih).
- Selesai.
