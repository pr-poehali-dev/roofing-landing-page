import json
import urllib.request
import urllib.parse
import os

TELEGRAM_TOKEN = "8642663713:AAF-eyI_Zmd7zyDPHpCQbZmBWB0QoP-rziQ"
CHAT_ID = "5081966112"

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот."""
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    service = body.get("service", "").strip()
    area = body.get("area", "").strip()
    comment = body.get("comment", "").strip()

    lines = ["🏠 Новая заявка с сайта:", f"👤 Имя: {name}", f"📞 Телефон: {phone}"]
    if service:
        lines.append(f"🔧 Услуга: {service}")
    if area:
        lines.append(f"📐 Площадь: {area} м²")
    if comment:
        lines.append(f"💬 Комментарий: {comment}")

    text = "\n".join(lines)

    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    data = urllib.parse.urlencode({"chat_id": CHAT_ID, "text": text}).encode()
    req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req, timeout=10) as resp:
        resp.read()

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({"ok": True}),
    }