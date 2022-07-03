## GİT KOMUTLARI

### LOCAL

1. Commit geçmişini görmek `git log`,
   Değişiklik var mı? görmek için: `git status`
2. Commitlenecek dosyaları seçmek "." hepsi demek `git add .`
3. Commitlemek için `git commit -m "Branchİsmi|Açıklama"`
4. Son commiti düzenlemek için `git commit --amend`
5. Son commit'in yalnızca açıklama/mesajını değiştirme `git commit --amend -m "Başlık|Degiştirilenmesaj"` --amend ile düzenlemeler yapılır ve git log'ta yeni bir commit miş gibi görünmez. eski commit düzenlenir.
6. Commiti silmek için git log'tan hash numarasını kopyala `git revert HASHNO` HASHNO'nun en az 7 hanesini kopyalamak lazım
7. Commiti log'a kayıt ettirilmeden silmek için `git reset --hard HASHNO`
8. Dosyadaki İki commit arasındaki diffleri görmek için `git diff HASHNO1..HASHNO2 dosyaadı` dosyaadını yazmazsak tüm dosyaları inceleyebiliriz.
9. Mevcut branhleri görmek : `git branch`
   Branch silmek için `git branch -d branchismi`
10. Branch oluşturmak için : `git branch branchismi` , içinde bulunan branchteki dosyalarıda yenisine kopyalar
11. Branche geçmek için : `git checkout branchismi`
12. Branch silmek için : `git branch -D branchismi`
13. Son Committen itibaren yapılan tüm değişikleri görülmeyen bir yere kopyalamak için `git stash` yazıldığında çalışma klasörüne kaydedilir. git log'ta gözükmez.  
    Listesini görmek için `git stash list`
    Listeyi silmek için `git stash clear`
    Listeki En üstteki kaydı geri getirmek için `git stash pop` Getirileni listeden siler.
    Listeden belirli bir stashi geri getirmek için `git stash STASHID` stashid buna benzer birşey : stash@{0}. Bu sayede listeden de silinmez.
14. Branch'leri Merge etmek için Master branchine geç ve : `git merge Branchismi` Brancnhismi branchini Master branchine merge eder.
15. Merge yaparken açıklama da yazabilmek için önce `git merge --squash branchismi` yazıp sonrasında `git commit -m "Baslık|Açıklama"` artık git log'ta yapılan açıklama görülebilir.
16. Merge işleminde farklı bir yaklaşım için rebase; Master branchine geç `git rebase branchismi` branchismi ni master branchine merge eder. Loglarda birleşim olduğuna dair bilgi yer almaz.
17. Git graph extension'u flow'u gösteriyor kullanılabilir.
18. conflict'ten dolayı merge i iptal etmek için `git merge --abort`
