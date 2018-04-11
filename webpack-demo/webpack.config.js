const path = require('path');

/*
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};

������չ�� webpack ���á���ָ�������ò��ҿ����������������ʹ�á�����һ�����еļ��������ڽ���ע��(concern)�ӻ���(environment)������Ŀ��(build target)������ʱ(runtime)�з��롣Ȼ��ʹ��ר�ŵĹ��ߣ��� webpack-merge�������Ǻϲ���
*/
// ���Զ����ڣ���һ��ֻ��һ�����ڣ�output ѡ����Կ��� webpack �����Ӳ��д������ļ�
module.exports = {
  entry: './src/index.js',  //�����ļ���ڣ���дǰ�ȼ��� entry:{main:'./src/index.js'}
  output: {
    filename: 'bundle.js',  //filename��������ļ����ļ�����
    path: path.resolve(__dirname, 'dist') // Ŀ�����Ŀ¼ path �ľ���·����
  },
  module:{
	  rules:
  }
};