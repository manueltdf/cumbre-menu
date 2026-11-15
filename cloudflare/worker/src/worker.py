"""Cloudflare Workers entrypoint for the isolated Cumbre staging app."""

from app import app
from workers import wsgi

Default = wsgi.entrypoint(app)
