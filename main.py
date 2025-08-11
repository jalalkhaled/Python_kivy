from kivy.lang import Builder
from kivy.utils import platform
from kivymd.app import MDApp
from jnius import autoclass
import os

KV = '''
BoxLayout:
    orientation: "vertical"
    Label:
        text: "Loading WebView..."
'''

class WebViewApp(MDApp):
    def build(self):
        if platform == 'android':
            from android.permissions import request_permissions, Permission
            request_permissions([Permission.INTERNET, Permission.READ_EXTERNAL_STORAGE])
        return Builder.load_string(KV)

    def on_start(self):
        if platform == 'android':
            WebView = autoclass('android.webkit.WebView')
            WebViewClient = autoclass('android.webkit.WebViewClient')
            PythonActivity = autoclass('org.kivy.android.PythonActivity')
            activity = PythonActivity.mActivity

            webview = WebView(activity)
            webview.getSettings().setJavaScriptEnabled(True)
            webview.setWebViewClient(WebViewClient())

            index_path = 'file://' + os.path.join(os.getcwd(), 'assets', 'index.html')
            webview.loadUrl(index_path)

            activity.setContentView(webview)

if __name__ == '__main__':
    WebViewApp().run()run()