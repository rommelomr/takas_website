rm -r dist
rm dist.tar.gz
npm run build
cp .htaccess dist
tar -czvf dist.tar.gz dist
npm run serve