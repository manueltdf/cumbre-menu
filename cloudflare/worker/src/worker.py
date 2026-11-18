"""Cloudflare Workers entrypoint for the Cumbre menu app."""

from app import app
from workers import wsgi

Default = wsgi.entrypoint(app)
