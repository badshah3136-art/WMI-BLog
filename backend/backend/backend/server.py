(from fastapi import FastAPI, APIRouter, HTTPException, Response
from dotenv import load_dotenv
...)
(app.on_event("shutdown")
async def shutdown_db_client():
    client.close())
